  <script>
    import {setContext} from "svelte";
    import {PointService} from "./services/point-service";
    import Main from "./pages/Main.svelte"
    import Login from "./pages/Login.svelte"
    import Signup from "./pages/Signup.svelte"
    import Categories from "./pages/Categories.svelte";
    import Points from "./pages/Points.svelte";
    import Point from "./pages/Point.svelte";
    import Settings from "./pages/Settings.svelte";
    import Navigator from "./components/Navigator.svelte";
    import Router from "svelte-spa-router";

    setContext("PointService", new PointService("http://localhost:4000"));

   let routes = {
     "/" : Main,
     "/login": Login,
      "/signup" : Signup,
     "/categories": Categories,
     "/points": Points,
     "/point": Point,
     "/settings" : Settings,
     "/logout" : Main
   }
  </script>

  <div class="uk-container">
    <Navigator/>
    <Router {routes}/>
  </div>