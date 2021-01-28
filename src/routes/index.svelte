<style>
.cards {
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
}

.loading {
  margin-top: 8rem;
}

.error {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #b0b0b0;
}
</style>

<Search />
{#if $jobs.length < 1}
  <div class="loading">
    {#if $isFound}
      <LoadingBar />
    {:else}
      <h1 class="error">Not found, Please try with another keyword!</h1>
    {/if}
  </div>
{:else}
  <div class="cards">
    {#each $jobs as { created_at, title, type, company, location, company_logo, id }}
      <Card
        {created_at}
        {title}
        {type}
        {company}
        {location}
        {company_logo}
        {id}
      />
    {/each}
  </div>
{/if}

<script context="module" lang="ts">
import { jobs } from "#stores/jobs"

export const load = async ({ fetch }) => {
  const req = await fetch("/jobs.json?kind=all&page=1")
  const res = await req.json()

  jobs.set(res)
}
</script>

<script lang="ts">
import Search from "#components/SearchBar.svelte"
import Card from "#components/Card.svelte"
import LoadingBar from "#components/Loading.svelte"

import { isFound } from "#stores/found_status"
</script>
