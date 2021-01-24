import { writable, Writable } from "svelte/store"

interface Filter {
  search: string
  location: string
  isFullTime: boolean
}

export const filter: Writable<Filter> = writable<Filter>({
  search: "",
  location: "",
  isFullTime: false,
})
