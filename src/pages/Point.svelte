<script>
 import 'leaflet/dist/leaflet.css';
  import tory from "/src/assets/tory.jpeg";
  import {navBar, mainBar, subTitle, title} from "../stores"
  import PointForm from "../components/PointForm.svelte";
  import {LeafletMap} from '../services/leaflet-map';

    let lat = 52.160858;
    let lng = -7.152420;

    let map;
    onMount(async () => {
      const mapConfig = {
        location: {lat: lat, lng: lng},
        zoom: 8,
        minZoom: 7,
      };
      map = new LeafletMap("donation-map", mapConfig, 'Terrain');
      map.showZoomControl();
    });

    title.set("Points of Interest Inc.");
    subTitle.set("Add a Poi!");
    navBar.set({
      bar: mainBar
    });

</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <img width="300" src="{tory}" alt="tory">
    </div>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
      <PointForm/>
       <PointForm bind:lat={lat} bind:lng={lng}/>
    </div>
  </div>
</div>