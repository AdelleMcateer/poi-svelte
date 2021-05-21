<script>
  import {getContext, onMount} from 'svelte'

  const pointService = getContext("PointService");
  let pointList = [];

  onMount(async () => {
    pointList = await pointService.getPoints();
  });
</script>

<h3 class="uk-heading-divider">
  Point List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        Name
      </th>
      <th>
        Description
      </th>
      <th>
      Contributor
      </th>
      <th>
         Latitude
       </th>
       <th>
         Longitude
       </th>
        <th>
         Category
        </th>
    </thead>
    <tbody class="uk-text-left">
      {#each pointList as point}
        <tr>
          <td>
            {point.name}
          </td>
          <td>
            {point.description}
          </td>
          <td>
            {point.contributor}
          </td>
        <td>
          {point.latitude}
        </td>
        <td>
           {point.longitude}
         </td>
          <td>
            {point.categories.name}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>