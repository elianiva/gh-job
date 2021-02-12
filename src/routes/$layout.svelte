<style>
.wrapper {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.top_bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10rem;
  background-color: var(--color-main-accent);
  border-bottom-left-radius: 6rem;
  z-index: -1;
}

@media only screen and (max-width: 480px) {
  .top_bg {
    border-radius: 0;
  }
}
</style>

<!--prettier-ignore-->
<svelte:head>
  <script>
    try {
      // prettier-ignore
      const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")
      let preference

      // prettier-ignore
      if (localStorage.getItem("theme")) preference = localStorage.getItem("theme")
        else preference = isDarkMode ? "dark" : "light"

      // prettier-ignore
      if (preference) document.documentElement.setAttribute("data-theme", preference)
    } catch (err) {
      console.log(err)
    }
  </script>
</svelte:head>

<div class="top_bg" />
<div class="wrapper">
  <Navbar />
  <slot />
</div>

<script>
import Navbar from "#components/Navbar.svelte"
import { onMount } from "svelte"
import { theme } from "#stores/theme"

onMount(() => {
  const { matches: isDarkTheme } = window.matchMedia(
    "(prefers-color-scheme: dark)"
  )

  let preference

  // prettier-ignore
  if (localStorage.getItem("theme")) preference = localStorage.getItem("theme")
  else preference = isDarkTheme ? "dark" : "light"

  theme.set(preference)

  theme.subscribe(current => {
    localStorage.setItem("theme", current)
    document.documentElement.setAttribute("data-theme", current)
  })
})
</script>
