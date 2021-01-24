<style>
.search {
  width: 100%;
  border-radius: 0.5rem;
  background-color: #ffffff;
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
  border-right: 1px #efefef solid;
  margin-left: 1rem;
}

:global(.search__icon) {
  color: #5961e5;
}

.search__company-input {
  font-size: 1rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  color: #131722;
  outline: none;
}

.search__company-input::placeholder {
  color: #8e8eae;
}

.submit__fulltime-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #ffffff;
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
}

.submit__button {
  background-color: #5964e0;
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
      style="background-color: {isChecked ? '#5964e0' : '#e8e8ea'};"
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
import Search from "#icons/Search.svelte"
import Point from "#icons/Point.svelte"
import Checkmark from "#icons/Checkmark.svelte"

let isChecked = false
let search = ""
let location = ""
let submit

filter.set({
  search,
  location,
  isFullTime: isChecked,
})

const getFilteredResult = async () => {
  const req = await fetch(`/jobs.json?kind=all&search=${search}&page=1`)
  const res = await req.json()

  console.log(res)

  jobs.set(res)
}
</script>
