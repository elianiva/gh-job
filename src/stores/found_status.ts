import { writable, Writable } from "svelte/store"

export const isFound: Writable<boolean> = writable(true)
