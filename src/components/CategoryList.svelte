<script>
  import {onMount, getContext} from 'svelte'
   const pointService = getContext("PointService");

  let categoryList;
  onMount(async () => {
    categoryList = await pointService.getCategories()
  })
</script>

<h3 class="uk-heading-divider">
  Category List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        Name
      </th>
    </thead>
    <tbody class="uk-text-left">
      {#if categoryList}
        {#each categoryList as category}
          <tr>
            <td>{category.name}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
