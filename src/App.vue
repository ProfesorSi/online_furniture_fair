<template>
  <div id="app">

 <!-- Comment in to return original fair -->
   <!-- <Navigation /> -->
    <!-- <span class="go-back">
      <button @click="goBack">Prethodna</button>
    </span> -->

   <!-- <router-view></router-view> -->

   <!-- Furniture is closed -->
    <div class="closed-fair">
      <img alt="Sajam logo" src="../src/assets/group102.png" />
      <div class="article">
        <p>ZAHVALJUJEMO SE NA 70 HILJADA PREGLEDA U PRETHODNIH SEDAM DANA. </p> <br>
    <h3>ŽELITE PRIJAVITI IZLAGANJE NA JESENJI SAJAM </h3> <br> PRIJAVE NA <br> 
          <a href="mailto:INFO@NAMJESTAJ.SHOP"><h2>INFO@NAMJESTAJ.SHOP</h2></a>

          <p>DO OTVARANJA NOVOG SAJMA 
KUPUJTE NAMJEŠTAJ ONLINE NA <br>
<a href="https://namjestaj.shop/"><h1>WWW.NAMJESTAJ.SHOP</h1></a></p>
      </div>
      <div class="footer">
        <img alt="Sajam logo" src="../src/assets/logo.png" />
      </div>

    </div>

  </div>
</template>

<script>
// import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
  },

  methods: {
    // goBack() {
    //   return this.$router.back();
    // },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

.closed-fair {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
  margin-top: 25px;
}

img {
  width: 200px;
  
}

.footer {
  margin-top: 50px;
}

.go-back {
  display: flex;
  cursor: pointer;
  position: absolute;
  left: 350px;
  top: 10px;
}

.go-back button {
 padding: 5px;
 color: black;

}

/* #app {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  margin-top: 25px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
} */

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
