  <script>
   import { setContext } from "svelte";
   import {PointService} from "./services/point-service";
   import Categories from "./pages/Categories.svelte";
   import Points from "./pages/Points.svelte";

   setContext("PointService", new PointService("http://localhost:4000"));
  </script>

  <div class="uk-container">
 <h1> Poi Client Application </h1>
     <Categories/>
     <Points/>
  </div>