<template>
  <div class="navigation">
    <div class="logo">
      <img alt="Sajam logo" src="../assets/group102.png" />
      <p>
        Online Sajam <br />
        Namještaja <br />
        <span>1. U BiH</span>
      </p>
    </div>

    <div class="navigation-menu">
      <ul>
        <li>
          <img class="icon" alt="Izdvojeno" src="../assets/enter_icon.png" />
          <p>
            <router-link
              class="show-on-mobile"
              v-scroll-to="'#categories-content'"
              to="/"
              >Ulaz na sajam</router-link
            >
            <router-link class="show-on-desktop" to="/"
              >Ulaz na sajam</router-link
            >
          </p>
        </li>
        <li>
          <img
            class="icon"
            alt="Izdvojeno"
            src="../assets/group_izlagaci.png"
          />
          <p>
            <router-link
              class="show-on-mobile"
              v-scroll-to="'#exhibitors-content'"
              :to="{
                name: 'Exhibitors',
                path: '/exhibitors',
              }"
              >Izlagači</router-link
            >
            <router-link
              class="show-on-desktop"
              :to="{
                name: 'Exhibitors',
                path: '/exhibitors',
              }"
              >Izlagači</router-link
            >
          </p>
        </li>
        <!-- <li>
          <img alt="Izdvojeno" src="../assets/group94.png" />
          <p>
            <a href="#">Izdvojeno</a>
          </p>
        </li> -->
        <li>
          <img class="icon" alt="Partneri" src="../assets/group95.png" />
          <p>
            <router-link
              class="show-on-mobile"
              v-scroll-to="'#partners-content'"
              :to="{
                name: 'Partners',
                path: '/partners',
              }"
              >Partneri</router-link
            >
            <router-link
              class="show-on-desktop"
              :to="{
                name: 'Partners',
                path: '/partners',
              }"
              >Partneri</router-link
            >
          </p>
        </li>
      </ul>
    </div>
    <div id="sponsors">
      <h2>SPONZORI</h2>
      <a href="https://wmta-edu.com/" target="_blank"
        ><img
          class="image"
          alt="Izdvojeno"
          src="../images/partners/obrazovanje_odraslih.png"
      /></a>

      <a href="https://www.stanpromet.ba/realestate-sarajevo" target="_blank">
        <img
          class="image stan"
          alt="Izdvojeno"
          src="../images/partners/stanpromet.png"
      /></a>
        <a href="https://corpus.hr/en/pages/" target="_blank"
      ><img
        class="image"
        alt="Izdvojeno"
        src="../images/partners/corpus.jpg"
    /></a>
    </div>
  </div>
</template>


   

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sponsors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 300px;
}

#sponsors img {
  width: 140px;
}

.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-width: 300px;
  font-size: 14px;
  height: 100vh;
  margin-right: 25px;
  padding-top: 25px;
}

.logo {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

.logo p {
  text-align: center;
  color: #ffc501;
  font-size: 18px;
}

.logo p span {
  color: black;
}

.navigation-menu {
  width: 100%;
}

a {
  text-decoration: none;
  color: black;
}

a:hover,
a:active {
  color: #ffc501;
}

.navigation-menu img {
  width: 25px;
  height: 25px;
  object-fit: cover;
  height: 100%;
}

.navigation-menu ul {
  display: flex;
  flex-direction: column;

  align-content: center;
}

.navigation-menu li {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 20px;
}

.navigation-menu li p {
  margin-left: 40px;
}

@media screen and (max-width: 800px) {
  .icon {
    width: 100%;
  }

  .navigation {
    margin: 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    background: white;
    max-height: 500px;
    border-bottom: 3px solid black;
  }

  .navigation-menu {
    width: 100%;
    margin-left: 80px;
    text-align: center;
  }
}

@media (min-width: 761px) {
  .show-on-mobile {
    display: none !important;
  }
}
@media (max-width: 760px) {
  .show-on-desktop {
    display: none !important;
  }
}
</style>
