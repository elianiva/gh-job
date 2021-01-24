import { writable, Writable } from "svelte/store"

interface Filter {
  search: string
  location: string
  isFullTime: boolean
  page: number
}

export const filter: Writable<Filter> = writable<Filter>({
  search: "",
  location: "",
  isFullTime: false,
  page: 1,
})
