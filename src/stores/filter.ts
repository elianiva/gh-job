import { writable, Writable } from "svelte/store"

interface Filter {
  keyword: string
  location: string
  isFullTime: boolean
}

export const filter: Writable<Filter> = writable<Filter>({
  keyword: "",
  location: "",
  isFullTime: false,
})
