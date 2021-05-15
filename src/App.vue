<template>
  <div id="app">
    <Navigation />
     <!-- <span class="go-back">
       <button @click="goBack">Prethodna</button>
     </span> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },

  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

.go-back {
  display: flex;
  cursor: pointer;
}

button {
  border: 0;
}

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

a {
    text-decoration: none;
    color: rgb(128, 120, 120);
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
