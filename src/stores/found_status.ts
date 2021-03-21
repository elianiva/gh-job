import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

export const isFound: Writable<boolean> = writable(true)
