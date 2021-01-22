<style>
.wrapper {
  max-width: 1080px;
  margin: 0 auto;
}

.top_bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10rem;
  background-color: #5964e0;
  border-bottom-left-radius: 6rem;
  z-index: -1;
}
</style>

<div class="top_bg" />
<div class="wrapper">
  <Navbar />
  <slot />
</div>

<script>
import Navbar from "../components/Navbar.svelte"
</script>
