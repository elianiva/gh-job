<style>
.cards {
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
}
</style>

<Search />
<div class="cards">
  {#each $jobs as { created_at, title, type, company, location, company_logo, id }}
    <Card
      {created_at}
      {title}
      {type}
      {company}
      {location}
      icon={company_logo}
      {id}
    />
  {/each}
</div>

<script context="module" lang="ts">
import { jobs } from "#stores/jobs"

export const load = async ({ fetch }) => {
  const req = await fetch("/jobs.json?kind=all&search=node&page=1")
  const res = await req.json()

  jobs.set(res)
}
</script>

<script lang="ts">
import Search from "#components/SearchBar.svelte"
import Card from "#components/Card.svelte"
</script>
