import fetch from "node-fetch"

export const get = async (req: any) => {
  const { query: q } = req

  const filterObj = {
    search: q.get("search") || "",
    page: q.get("page") || "",
    location: q.get("location") || "",
    full_time: q.get("full_time") ?? false,
  }

  const filter = Object.entries(filterObj)
    .map(([key, val]) => (val !== "" ? `${key}=${val}` : ""))
    .join("&")
    .replace(/&&/g, "&") // this seems hacky, it's used to remove double `&&` when the provided query is an empty string

  const url =
    q.get("kind") === "all"
      ? `https://jobs.github.com/positions.json?${filter}`
      : `https://jobs.github.com/positions/${q.get("id")}.json`

  const raw = await fetch(url)
  const result = await raw.json()

  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: result,
  }
}
