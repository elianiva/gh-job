<style>
.container {
  max-width: 720px;
  margin: 0 auto;
}

.top-bar,
.main {
  border-radius: 0.4rem;
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  max-width: 100%;
}

.top-bar {
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1.25fr;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  min-height: 8rem;
}

.top-bar__logo {
  min-width: 6rem;
  min-height: 6rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-column: 1/2;
  grid-row: 1/-1;
}

.top-bar__company {
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: flex-end;
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  padding-left: 2rem;
}

.top-bar__company_url {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #555555;
  padding-left: 2rem;
}

.top-bar__button {
  grid-column: 3/4;
  grid-row: 1/-1;
  align-self: center;
  justify-self: flex-start;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background-color: #efeffb;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #5964e0;
  text-decoration: none;
  font-weight: 700;
}

.main__heading {
  margin-bottom: 2rem;
}

.heading__middle {
  color: #121212;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.heading__bottom {
  color: #5964e0;
  font-weight: 600;
}

.main {
  padding: 3rem;
  margin-bottom: 4rem;
  font-family: "Poppins", sans-serif;
}

.main :global(article *) {
  line-height: 1.75em;
  margin-bottom: 1em;
}

.main :global(p),
.main :global(li) {
  color: #555555;
}

.main :global(a) {
  color: #5964e0;
  font-weight: 600;
}

.main :global(h1) {
  color: #121212;
}
</style>

<div class="container">
  <div class="top-bar">
    <img class="top-bar__logo" src={$job.company_logo} alt="" />
    <span class="top-bar__company">{$job.company.substr(0, 25)}...</span>
    <span class="top-bar__company_url">
      {$job.company_url
        .replace(/^https?:\/\/(www\.)?/g, "")
        .replace(/\/.*$/g, "")}
    </span>
    <a class="top-bar__button" href={$job.company_url}>Company Site</a>
  </div>
  <section class="main">
    <div class="main__heading">
      <div class="heading__top">
        <span class="heading__time">{relativeDateString}</span>
        •
        <span class="heading__time">{$job.type}</span>
      </div>
      <h1 class="heading__middle">{$job.title}</h1>
      <span class="heading__bottom">
        {$job.location.replace(/\[.*\]/g, "")}
      </span>
    </div>
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

<script lang="ts">
import { toRelativeDate } from "#helpers/toRelativeDate"

const relativeDate = toRelativeDate($job.created_at)
const relativeDateString =
  relativeDate === 0
    ? "Today"
    : relativeDate > 1
    ? `${relativeDate} days ago`
    : `${relativeDate} day ago`
</script>
