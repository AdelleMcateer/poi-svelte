<script>
  import CategoryList from "../components/CategoryList.svelte";
  import blasket from "/src/assets/blasket.jpeg";
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <img width="300" src="{blasket}" alt="homer">
  </div>
  <div class="uk-width-1-2@m">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <CategoryList/>
    </div>
  </div>
</div>