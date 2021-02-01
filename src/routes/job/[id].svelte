<style>
.container {
  max-width: 720px;
  margin: 0 auto;
}

.head,
.main {
  border-radius: 0.4rem;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  max-width: 100%;
}

.head {
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
}

.head__logo {
  width: 100%;
  grid-column: 1/2;
  grid-row: 1/-1;
}

.head__company {
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: flex-end;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 2rem;
}

.head__company_url {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #555555;
  padding-left: 2rem;
}

.head__button {
  grid-column: 3/4;
  grid-row: 1/-1;
  align-self: center;
  justify-self: flex-start;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background-color: #EFEFFB;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #5964E0;
  text-decoration: none;
  font-weight: 700;
}

.main {
  padding: 3rem;
  margin-bottom: 4rem;
}

.main :global(*) {
  font-family: "Poppins", sans-serif;
  color: #555555;
  line-height: 1.75em;
  margin-bottom: 1em;
}
</style>

<div class="container">
  <header class="head">
    <img class="head__logo" src={$job.company_logo} alt="" />
    <span class="head__company">{$job.company}</span>
    <span class="head__company_url">
      {$job.company_url.replace(/^https?:\/\/(www\.)?/g, "")}
    </span>
    <a class="head__button" href={$job.company_url}>Company Site</a>
  </header>
  <section class="main">
    <div class="main__heading">something</div>
    <article>
      {@html $job.description}
    </article>
  </section>
</div>

<script context="module" lang="ts">
import { job } from "#stores/jobs"

export const load = async ({ page, fetch }) => {
  const req = await fetch(`/jobs.json?id=${page.params.id}`)
  const res = await req.json()

  job.set(res)
}
</script>

<script>
$: console.log($job)
</script>
