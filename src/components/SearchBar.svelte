<style>
.search {
  width: 100%;
  border-radius: 0.5rem;
  background-color: #ffffff;
  margin-top: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.025);
  display: grid;
  grid-template-columns: 1.25fr 1fr 1fr;
  align-items: center;
}

.search__company,
.search__location,
.search__submit {
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search__company,
.search__location {
  border-right: 1px #efefef solid;
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
  color: #b0b0b0;
}

.submit__fulltime-checkbox {
  width: 1.5rem;
  height: 1.5rem;
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
}
</style>

<div class="search">
  <div class="search__company">
    <Search className="search__icon" />
    <input
      class="search__company-input"
      type="text"
      placeholder="Filter by title, companies, expertise..."
    />
  </div>
  <div class="search__location">
    <Point className="search__icon" />
    <input
      class="search__company-input"
      type="text"
      placeholder="Filter by location..."
    />
  </div>
  <div class="search__submit">
    <input class="submit__fulltime-checkbox" type="checkbox" />
    <span class="submit__fulltime-label">Full Time Only</span>
    <button class="submit__button">Search</button>
  </div>
</div>

<script>
import Search from "./icons/Search.svelte"
import Point from "./icons/Point.svelte"
</script>
