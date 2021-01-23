import fetch from "node-fetch"

export const get = async (req: any) => {
  const raw = await fetch(
    `https://jobs.github.com/${req.query.get(
      "kind"
    )}.json?search=${req.query.get("keyword")}&page=${req.query.get("page")}`
  )
  const result = await raw.json()

  return {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: result,
  }
}
