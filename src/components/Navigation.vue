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
          <img alt="Izdvojeno" src="../assets/enter_icon.png" />
          <p>
            <router-link to="/">Ulaz na sajam</router-link>
          </p>
        </li>
        <li>
          <img alt="Izdvojeno" src="../assets/group_izlagaci.png" />
          <p>
            <router-link
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
          <img alt="Partneri" src="../assets/group95.png" />
          <p>
            <router-link
              :to="{
                name: 'Partners',
                path: '/partners',
              }"
              >Partneri</router-link
            >
          </p>
        </li>
        
        <div class="strelica">
          <p class="lista">Provjerite izlagače</p>
          <span class="lista"
            ><img class="strelica" src="../assets/arrow_down.png" alt=""
          /></span>
        </div>
      </ul>
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
.lista {
  display: none;
  margin-top: 80px;
}

.strelica {
 
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-width: 300px;
  font-size: 14px;
  height: 100vh;
  box-shadow: 5px 5px 5px 5px #a8a6a6;
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
  .navigation {
    background: white;
  }

  .lista {
    display: block;
    text-align: center;
    background: white;
    padding: 10px;
  }

  .navigation {
    margin: 0;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    min-width: 100%;
  }

  .navigation-menu {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -10%;
    min-width: 100%;
  }
}
</style>
