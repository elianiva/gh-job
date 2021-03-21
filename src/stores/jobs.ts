import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

export interface Job {
  id: string
  type: string
  url: string
  created_at: string
  company: string
  company_url: string
  location: string
  title: string
  description: string
  how_to_apply: string
  company_logo: string
}

export const jobs: Writable<Job[]> = writable([])

export const job: Writable<Job> = writable(null)
