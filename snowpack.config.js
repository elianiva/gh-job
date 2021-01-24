// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-typescript"],
  mount: {
    "src/components": "/_components",
    "src/helpers": "/_helpers",
    "src/icons": "/_icons",
    "src/stores": "/_stores",
  },
  alias: {
    "#components": "./src/components",
    "#helpers": "./src/helpers",
    "#icons": "./src/icons",
    "#stores": "./src/stores",
  },
}
