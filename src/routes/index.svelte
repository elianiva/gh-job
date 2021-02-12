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
  color: var(--color-fade-text);
}

.button {
  padding: 1rem 2rem;
  border: none;
  margin: 0 auto;
  color: var(--color-alt-text);
  background-color: var(--color-main-accent);
  display: block;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
}

.loading-text {
  display: block;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  color: var(--color-fade-dark-text);
}
</style>

<SEO title="Home" path="" />
<Search />
{#if $jobs.length < 1}
  <div class="loading">
    {#if $isFound}
      <Loading />
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
  {#if $jobs.length >= 50}
    {#if isFetching}
      <p class="loading-text">Loading more data...</p>
    {:else}
      <button class="button" on:click={fetchNextPage}> See More </button>
    {/if}
  {/if}
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
import SEO from "#components/SEO.svelte"
import Search from "#components/SearchBar.svelte"
import Card from "#components/Card.svelte"
import Loading from "#components/Loading.svelte"
import { isFound } from "#stores/found_status"
import { filter, currentPage } from "#stores/filter"

let isFetching = false

const fetchNextPage = async () => {
  isFetching = true
  const { search, location, isFullTime } = $filter
  const req = await fetch(
    `/jobs.json?kind=all&search=${search}&location=${location}&full_time${isFullTime}&page=${
      $currentPage + 1
    }`
  )
  const res = await req.json()

  jobs.set([...$jobs, ...res])
  isFetching = false
}
</script>
