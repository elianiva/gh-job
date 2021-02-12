<style>
.search {
  width: 100%;
  border-radius: 0.5rem;
  background-color: var(--color-alt-bg);
  margin-top: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.025);
  display: grid;
  grid-template-columns: 1.25fr 1fr 1fr;
  align-items: center;
}

.search__company,
.search__location,
.search__submit {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 60%;
}

.search__company,
.search__location {
  border-right: 1px var(--color-main-bg) solid;
  margin-left: 1rem;
}

:global(.search__icon) {
  color: var(--color-main-accent);
}

.search__company-input {
  font-size: 1rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  color: var(--color-main-text);
  background-color: var(--color-alt-bg);
  outline: none;
}

.search__company-input::placeholder {
  color: var(--color-fade-text);
}

.submit__fulltime-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: var(--color-alt-bg);
}

.checkbox__icon {
  width: 100%;
  height: 100%;
  display: flex;
  place-items: center;
}

.submit__fulltime-label {
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: var(--color-main-text);
}

.submit__button {
  background-color: var(--color-main-accent);
  border: none;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.submit__button:hover {
  filter: brightness(1.1);
}
</style>

<div class="search">
  <div class="search__company">
    <Search className="search__icon" />
    <input
      class="search__company-input"
      type="text"
      placeholder="Filter by title, companies, expertise..."
      on:keydown={e => e.key === "Enter" && submit.click()}
      on:input={e => (search = e.target.value)}
    />
  </div>
  <div class="search__location">
    <Point className="search__icon" />
    <input
      class="search__company-input"
      type="text"
      placeholder="Filter by location..."
      on:keydown={e => e.key === "Enter" && submit.click()}
      on:input={e => (location = e.target.value)}
    />
  </div>
  <div class="search__submit">
    <div
      class="submit__fulltime-checkbox"
      style="background-color: {isChecked
        ? 'var(--color-main-accent)'
        : 'var(--color-fade-bg)'};"
      on:click={() => (isChecked = !isChecked)}
    >
      {#if isChecked}
        <!--this needs to be wrapped inside a div so we can apply the transition-->
        <div class="checkbox__icon" transition:fade={{ duration: 0.05 }}>
          <Checkmark />
        </div>
      {/if}
    </div>
    <span class="submit__fulltime-label">Full Time Only</span>
    <button
      class="submit__button"
      on:click={getFilteredResult}
      bind:this={submit}>Search</button
    >
  </div>
</div>

<script>
import { fade } from "svelte/transition"
import { filter } from "#stores/filter"
import { jobs } from "#stores/jobs"
import { isFound } from "#stores/found_status"
import Search from "#icons/Search.svelte"
import Point from "#icons/Point.svelte"
import Checkmark from "#icons/Checkmark.svelte"

let isChecked = false
let search = ""
let location = ""
let submit

$: filter.set({
  search,
  location,
  isFullTime: isChecked,
})

const getFilteredResult = async () => {
  // we need to reset the state from previous search
  jobs.set([])
  isFound.set(true)

  const { search, location, isFullTime } = $filter
  const req = await fetch(
    // we want to restart from page 1 if we fetch the data from the search bar
    `/jobs.json?kind=all&search=${search}&location=${location}&full_time=${isFullTime}&page=1`
  )
  const res = await req.json()

  if (res.length < 1) {
    isFound.set(false)
    return
  }

  jobs.set(res)
}
</script>
