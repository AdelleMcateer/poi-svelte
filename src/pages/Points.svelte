<script>
  import PointList from "../components/PointList.svelte";
  import tory from "/src/assets/tory.jpeg";
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <PointList/>
    </div>
  </div>
  <div class="uk-width-1-2@m">
    <img width="300" src="{tory}" alt="tory">
  </div>
</div>