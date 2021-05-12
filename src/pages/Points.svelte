<script>
  import PointList from "../components/PointList.svelte";
  import aran from "/src/assets/aran.png";
  import {navBar, mainBar, subTitle, title} from "../stores"

  title.set("Points of Interest Inc.");
  subTitle.set("Latest Points");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <PointList/>
    </div>
  </div>
  <div class="uk-width-1-2@m">
    <img width="300" src="{aran}" alt="aran">
  </div>
</div>