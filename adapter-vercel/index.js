const fs = require("fs");
const { writeFileSync, mkdirSync, renameSync } = fs;
const path = require("path");
const { resolve, join } = path;

function mkdirp(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (e) {
    if (e.code === "EEXIST") return;
    throw e;
  }
}
function copy(from, to, filter = () => true) {
  if (!fs.existsSync(from)) return [];
  if (!filter(path.basename(from))) return [];

  const files = [];
  const stats = fs.statSync(from);

  if (stats.isDirectory()) {
    fs.readdirSync(from).forEach((file) => {
      files.push(...copy(path.join(from, file), path.join(to, file)));
    });
  } else {
    mkdirp(path.dirname(to));
    fs.copyFileSync(from, to);
    files.push(to);
  }

  return files;
}

module.exports = function () {
  /** @type {import('@sveltejs/kit').Adapter} */
  const adapter = {
    name: "@sveltejs/adapter-vercel",

    async adapt(builder) {
      const vercel_output_directory = resolve(".vercel_build_output");
      const config_directory = join(vercel_output_directory, "config");
      const static_directory = join(vercel_output_directory, "static");
      const lambda_directory = join(
        vercel_output_directory,
        "functions",
        "node",
        "render",
      );
      const server_directory = join(lambda_directory, "server");

      builder.log.minor("Writing client application...");
      builder.copy_static_files(static_directory);
      builder.copy_client_files(static_directory);

      builder.log.minor("Building lambda...");
      builder.copy_server_files(server_directory);
      renameSync(
        join(server_directory, "app.js"),
        join(server_directory, "app.mjs"),
      );

      copy(join(__dirname, "files"), lambda_directory);

      builder.log.minor("Prerendering static pages...");
      await builder.prerender({
        dest: static_directory,
      });

      builder.log.minor("Writing routes...");
      try {
        mkdirSync(config_directory);
      } catch {
        // directory already exists
      }
      writeFileSync(
        join(config_directory, "routes.json"),
        JSON.stringify([
          {
            handle: "filesystem",
          },
          {
            src: "/.*",
            dest: ".vercel/functions/render",
          },
        ]),
      );
    },
  };

  return adapter;
};
