<style>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 3rem;
}

.card__icon {
  position: absolute;
  top: -1.5rem;
  left: 1.5rem;
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  background-color: var(--color-alt-bg);
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.075);
  border-radius: 0.75rem;
}

.card__detail {
  flex: 1;
  background-color: var(--color-alt-bg);
  border-radius: 0.25rem;
  padding: 3rem 1.5rem 1.5rem;
  font-family: "Poppins", sans-serif;
  display: grid;
  align-items: center;
  gap: 1rem;
  grid-template-rows: 1rem 2fr 1rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.025);
}

.detail__top {
  color: var(--color-fade-text);
}

.detail__middle {
  align-self: flex-start;
}

.detail__title {
  font-size: 1.25rem;
  color: var(--color-main-text);
  display: block;
  font-weight: 600;
  text-decoration: none;
  transition: color ease-out 0.1s;
}

.detail__title:hover {
  color: var(--color-main-accent);
}

.detail__company {
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--color-fade-text);
}

.detail__location {
  display: block;
  color: var(--color-main-accent);
  font-weight: 600;
  bottom: 0;
}
</style>

<div class="card">
  <img class="card__icon" src={company_logo} alt="" loading="lazy" />
  <div class="card__detail">
    <div class="detail__top">
      <span class="detail__date">{relativeDateString}</span>
      •
      <span class="detail__type">{type}</span>
    </div>
    <div class="detail__middle">
      <a href="/job/{id}" class="detail__title">{title}</a>
      <span class="detail__company">{company}</span>
    </div>
    <span class="detail__location">{location.replace(/\[.*\]/g, "")}</span>
  </div>
</div>

<script lang="ts">
import { toRelativeDate } from "../helpers/toRelativeDate"

export let id: string
export let created_at: string
export let type: string
export let company: string
export let location: string
export let title: string
export let company_logo: string

const relativeDate = toRelativeDate(created_at)
const relativeDateString =
  relativeDate === 0
    ? "Today"
    : relativeDate > 1
    ? `${relativeDate} days ago`
    : `${relativeDate} day ago`
</script>
