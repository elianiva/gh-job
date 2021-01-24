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
  background-color: #ffffff;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.075);
  border-radius: 0.75rem;
}

.card__detail {
  flex: 1;
  background-color: #ffffff;
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
  color: #78818a;
}

.detail__middle {
  align-self: flex-start;
}

.detail__title {
  font-size: 1.25rem;
  color: #171a1f;
  display: block;
  font-weight: 600;
  text-decoration: none;
}

.detail__company {
  font-weight: 300;
  font-size: 0.8rem;
  color: #78818a;
}

.detail__location {
  display: block;
  color: #5964e0;
  font-weight: 600;
  bottom: 0;
}
</style>

<div class="card">
  <img class="card__icon" src={icon} alt="" />
  <div class="card__detail">
    <div class="detail__top">
      <span class="detail__date">{relativeDateString}</span>
      •
      <span class="detail__type">{type}</span>
    </div>
    <div class="detail__middle">
      <a href="/{id}" class="detail__title">{title}</a>
      <span class="detail__company">{company}</span>
    </div>
    <span class="detail__location">{location.replace(/\[.*\]/g, "")}</span>
  </div>
</div>

<script lang="ts">
import { toRelativeDate } from "../components/helpers/toRelativeDate"

export let id: string
export let created_at: Date
export let type: string
export let company: string
export let location: string
export let title: string
export let icon: string

const relativeDate = toRelativeDate(created_at)
const relativeDateString =
  relativeDate === 0
    ? "Today"
    : relativeDate > 1
    ? `${relativeDate} days ago`
    : `${relativeDate} day ago`
</script>
