<script lang="ts">
  import { onMount, getContext } from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const pointService = getContext("PointService");

  let categoryList = [];
  let name = "";
  let description = "";
  let contributor = "";
  let latitude = 0;
  let longitude = 0;
  let selectedCategory = 0;
  let errorMessage = "";

  export let lat = 0.0;
  export let lng = 0.0;

  onMount(async () => {
    categoryList = await pointService.getCategories()
  });

  async function point() {
    const success = await pointService.point(name, description, contributor, categoryList[selectedCategory],
     {
           lat: lat,
           lng: lng})
    if (success) {

    } else {
      errorMessage = "Point not added - some error occurred";
    }
  }
</script>

<form on:submit|preventDefault={point} class="uk-form-stacked uk-text-left">
  <div class="uk-grid uk-grid-stack">
    <div class="uk-width-1-2@m">
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Enter Name</label>
        <div class="uk-form-controls">
          <input bind:value={name} class="uk-input" id="form-stacked-text" type="string" name="name" placeholder="Poi Name">
        </div>
         <div class="uk-form-controls">
              <input bind:value={description} class="uk-input" id="form-stacked-text" type="string" description="description" placeholder="Poi Description">
        </div>

         <div class="uk-form-controls">
          <input bind:value={latitude} class="uk-input" id="form-stacked-text" type="number" latitude="latitude" placeholder="latitude">
           </div>
            <div class="uk-form-controls">
              <input bind:value={longitude} class="uk-input" id="form-stacked-text" type="number" longitude="longitude" placeholder="longitude">
                </div>
      </div>
      <div class="uk-margin">

<div class=" uk-width-1-2@m">
      <div class="uk-margin uk-text-left">
        <div class="uk-form-label">Select Category </div>
        <div class="uk-form-controls ">
          {#each categoryList as category, i}
            <label>
              <input bind:group={selectedCategory} value={i} class="uk-radio" type="radio" name="category" />
              {category.name}
            </label>
            <br>
          {/each}
        </div>
      </div>
      <div class="uk-margin">
        <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add Point</button>
      </div>
      {#if errorMessage}
        <div class="uk-text-left uk-text-small">
          {errorMessage}
        </div>
      {/if}
    </div>
  </div>
</form>
