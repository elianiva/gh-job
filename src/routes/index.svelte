<style>
.cards {
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}
</style>

<Search />
<div class="cards">
  {#each data as { created_at, title, type, company, location, company_logo, id }}
    <Card {created_at} {title} {type} {company} {location} icon={company_logo} {id} />
  {/each}
</div>

<script context="module" lang="ts">
export const load = async ({ fetch }) => {
  const req = await fetch("/jobs.json?kind=positions&keyword=node&page=1")
  const res = await req.json()
  return {
    props: {
      data: res,
    },
  }
}
</script>

<script lang="ts">
import Search from "../components/SearchBar.svelte"
import Card from "../components/Card.svelte"

export let data: any
</script>
