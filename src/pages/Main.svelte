<script>
  import {title, subTitle, navBar, welcomeBar} from "../stores"
  import tory from "/src/assets/tory.jpeg";
  title.set("Points of Interest Inc");
  subTitle.set("Sign up or Log in");

  navBar.set({
    bar: welcomeBar
  });
</script>

<div class="uk-text-center" uk-grid>
  <div class="uk-width-1-2@m">
    <img width="200" src="{tory}" alt="tory">
    <p> Lets do this thing </p>
  </div>
  <div class="uk-width-1-2@m ">
    <div class="uk-width-2xlarge">
      <h3 class="uk-heading-small uk-flex"> Add your points of interest  </h3>
      <p> All locations accepted! </p>
    </div>
  </div>
</div>