<style>
.container {
  max-width: 720px;
  margin: 0 auto;
}

.top-bar,
.main {
  border-radius: 0.4rem;
  background-color: var(--color-alt-bg);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  max-width: 100%;
}

.top-bar {
  position: relative;
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
  color: var(--color-main-text);
}

.top-bar__company_url {
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: var(--color-fade-text);
  padding-left: 2rem;
}

.top-bar__button {
  grid-column: 3/4;
  grid-row: 1/-1;
  align-self: center;
  justify-self: flex-start;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background-color: var(--color-fade-bg);
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: var(--color-main-accent);
  text-decoration: none;
  font-weight: 700;
}

.main__heading {
  margin-bottom: 2rem;
}

.heading__top {
  color: var(--color-fade-text);
}

.heading__middle {
  color: var(--color-alt-text);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.heading__bottom {
  color: var(--color-main-accent);
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
  color: var(--color-fade-text);
}

.main :global(a) {
  color: var(--color-main-accent);
  font-weight: 600;
}

.main :global(h1) {
  color: var(--color-main-text);
}

@media only screen and (max-width: 720px) {
  .top-bar {
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: 2rem 2rem 2rem 3rem;
    padding: 2rem 0;
    overflow: visible;
  }

  .top-bar__logo {
    grid-row: 1/2;
    grid-column: 1/2;
    justify-self: center;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    top: -5rem;
    position: absolute;
    background-color: var(--color-alt-bg);
    border-radius: 50%;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.05);
  }

  .top-bar__company {
    grid-row: 2/3;
    grid-column: 1/-1;
    padding-left: 0;
  }

  .top-bar__company_url {
    grid-row: 3/4;
    grid-column: 1/-1;
    padding-left: 0;
  }

  .top-bar__button {
    grid-row: 4/5;
    grid-column: 1/-1;
    justify-self: center;
    margin-top: 1rem;
  }
}
</style>

<SEO title={$job.company} path="" />
<div class="container">
  <div class="top-bar">
    <img class="top-bar__logo" src={$job.company_logo} alt="" />
    <span class="top-bar__company">
      {$job.company.length > 25
        ? `${$job.company.substr(0, 25)}...`
        : $job.company}
    </span>
    <span class="top-bar__company_url">
      {$job.company_url ? $job.company_url
        ?.replace(/^https?:\/\/(www\.)?/g, "")
        ?.replace(/\/.*$/g, "") : ""}
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
        {$job.location?.replace(/\[.*\]/g, "")}
      </span>
    </div>
    <article>
      {@html $job.description}
      {@html $job.how_to_apply}
    </article>
  </section>
</div>

<script context="module" lang="ts">
import { job } from "../../stores/jobs"

export const prerender = true
export const load = async ({ page, fetch }) => {
  const req = await fetch(`/jobs.json?id=${page.params.id}`)
  const res = await req.json()

  job.set(res)

  // needs to return something even if we don't use it
  return { props: {} }
}
</script>

<script lang="ts">
import { toRelativeDate } from "../../helpers/toRelativeDate"
import SEO from "../../components/SEO.svelte"

const relativeDate = toRelativeDate($job.created_at)
const relativeDateString =
  relativeDate === 0
    ? "Today"
    : relativeDate > 1
    ? `${relativeDate} days ago`
    : `${relativeDate} day ago`
</script>
