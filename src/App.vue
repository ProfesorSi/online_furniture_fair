<template>
  <div id="app">
    <Navigation />
    <GalleryMenu />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import GalleryMenu from "./components/GalleryMenu.vue";

export default {
  name: "App",
  components: {
    Navigation,
    GalleryMenu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

#app {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-top: 25px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
}

@media screen and (max-width: 800px) {
  #app {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  
}
</style>
