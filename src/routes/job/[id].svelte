<style>
.head,
.main {
  padding: 3rem;
  border-radius: 0.4rem;
  background-color: #ffffff;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
}

.head {
  margin-bottom: 2rem;
}

.main :global(p) {
  font-family: "Poppins", sans-serif;
  color: #555555;
  line-height: 1.5em;
  margin-bottom: 1.5rem
}
</style>

<header class="head">
  <h1>henlo</h1>
</header>
<section class="main">
  <div class="main__heading">

  </div>
  <article>
    {@html $job.description}
  </article>
</section>

<script context="module" lang="ts">
import { job } from "#stores/jobs"

export const load = async ({page, fetch}) => {
  const req = await fetch(`/jobs.json?id=${page.params.id}`)
  const res = await req.json()

  job.set(res)
}
</script>
