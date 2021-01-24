export const toRelativeDate = (date: string) => {
  const now = Date.now()
  const created = new Date(date).getTime()
  const relative = created - now

  const day = Math.floor(Math.abs(relative / 86_400_000))

  return day
}
