<style>
.nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}

.nav__title a {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-weight: 600;
  font-size: 2rem;
  text-decoration: none;
}

.nav__theme-switch {
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav__theme-switch :global(.icon) {
  width: 1.4rem;
  height: 1.4rem;
}

.nav__switch {
  position: relative;
  background-color: #ffffff;
  width: 2.5rem;
  height: 1rem;
  border-radius: 1rem;
  padding: 0.25rem;
  cursor: pointer;
}

.switch__ball {
  width: 1rem;
  height: 1rem;
  background-color: #5964e0;
  border-radius: 50%;
  transition: margin ease-out 0.15s;
}
</style>

<nav class="nav">
  <h1 class="nav__title"><a href="/">devjobs</a></h1>
  <div class="nav__theme-switch">
    <Sun className="icon" />
    <div class="nav__switch" on:click={toggleTheme}>
      <div
        class="switch__ball"
        style="margin-left: {isDarkMode ? '1.5rem' : 0}"
      />
    </div>
    <Moon className="icon" />
  </div>
</nav>

<script>
import Sun from "#icons/Sun.svelte"
import Moon from "#icons/Moon.svelte"
import { theme } from "#stores/theme.ts"

$: isDarkMode = $theme == "dark"

const toggleTheme = () => {
  theme.update(current => (current === "light" ? "dark" : "light"))
}
</script>
