<script>
  import 'leaflet/dist/leaflet.css';
  import {mainBar, navBar, subTitle, title} from "../stores"
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

  let lat = 52.160858;
  let lng = -7.152420;

  let map;
  onMount(async () => {
    const mapConfig = {
      location: {lat: lat, lng: lng},
      zoom: 8,
      minZoom: 1,
    };
    map = new LeafletMap("donation-map", mapConfig, 'Terrain');
    map.addLayerGroup('Donations');
    map.showZoomControl();
    map.showLayerControl();
    const donations = donationService.donationList;
    donations.forEach(donation=>{
      const donationStr = `${donation.candidate.firstName} ${donation.candidate.lastName} €${donation.amount.toString()}`;
      if (donation.location) {
        map.addMarker({lat: donation.location.lat, lng: donation.location.lng}, donationStr, 'Donations');
      }
    });
  });

  title.set("Donation Services Inc.");
  subTitle.set("Map of all Donations");
  navBar.set({
    bar: mainBar
  });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
  <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
    <div id="donation-map" class="ui embed" style="height:800px"></div>
  </div>
</div>

