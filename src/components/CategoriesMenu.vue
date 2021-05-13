<template>
  <div>
    <!-- Photo Grid -->
    <div class="categories-menu">
      <div class="row">
        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[1]}` },
            query: { kategorija: `${this.categories[1]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/soba.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/group1.png"
                style="width: 65px; max-height: 100%"
              />
              <p>{{ categories[1] }}</p>
            </div>
          </div>
        </router-link>

        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[2]}` },
            query: { kategorija: `${this.categories[2]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/kaktus.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/art_icon.png"
                style="width: 50px; max-height: 100%"
              />
              <p>{{ categories[2] }}</p>
            </div>
          </div>
        </router-link>
        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[3]}` },
            query: { kategorija: `${this.categories[3]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/bojanka.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/dizajn_icon.png"
                style="width: 50px; max-height: 100%"
              />
              <p>{{ categories[3] }}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="row">
        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[4]}` },
            query: { kategorija: `${this.categories[4]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/spavaca.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/krevet_icon.png"
                style="width: 60px; max-height: 100%"
              />
              <p>{{ categories[4] }}</p>
            </div>
          </div>
        </router-link>

        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[5]}` },
            query: { kategorija: `${this.categories[5]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/trpezarija.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/trpezarija_icon.png"
                style="width: 55px; max-height: 100%"
              />
              <p>{{ categories[5] }}</p>
            </div>
          </div></router-link
        >

        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[6]}` },
            query: { kategorija: `${this.categories[6]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/radna_soba.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/radni_icon.png"
                style="width: 55px; max-height: 100%"
              />
              <p>{{ categories[6] }}</p>
            </div>
          </div></router-link
        >

        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[7]}` },
            query: { kategorija: `${this.categories[7]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/majstor.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/ruka_icon.png"
                style="width: 50px; max-height: 100%"
              />
              <p>{{ categories[7] }}</p>
            </div>
          </div></router-link
        >
      </div>
      <div class="row">
        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[8]}` },
            query: { kategorija: `${this.categories[8]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/kuhinja.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/kuhinja_icon.png"
                style="width: 50px; max-height: 100%"
              />
              <p>{{ categories[8] }}</p>
            </div>
          </div></router-link
        >

        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[9]}` },
            query: { kategorija: `${this.categories[9]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/garderober.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/ormari_icon.png"
                style="width: 55px; max-height: 100%"
              />
              <p>{{ categories[9] }}</p>
            </div>
          </div></router-link
        >

        <router-link
          :to="{
            name: 'CategoryView',
            path: 'kategorija',
            params: { category: `${this.categories[10]}` },
            query: { kategorija: `${this.categories[10]}` },
          }"
        >
          <div class="image-container">
            <img alt="Izdvojeno" src="../images/outdoor.png" />
            <div class="shadow">
              <img
                alt="Izdvojeno"
                src="../assets/basta_icon.png"
                style="width: 50px; max-height: 100%"
              />
              <p>{{ categories[10] }}</p>
            </div>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      categories: {
        1: "Dnevni boravak",
        2: "Art i dekor",
        3: "Usluge dizajna",
        4: "Kreveti i spavace sobe",
        5: "Trpezarija",
        6: "Kancelarijski namještaj",
        7: "Handmade kutak",
        8: "Kuhinje",
        9: "Ormari",
        10: "Baštenski program i ostalo",
      },
    };
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
.image-container {
  width: 100%;
  height: 240px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shadow {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  margin-right: 10px;

  border-radius: 0 0 20px 20px;
  margin-top: -85px;

  position: relative;
  margin-left: 10px;

  z-index: 1;
}

.shadow p {
  color: white;
  font-weight: 100;
}

.categories-menu {
  display: flex;
  flex-direction: row;
}

.row {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 100%;
  padding: 0 4px;
}

.row img {
  padding: 10px;
  border-radius: 30px;
}



@media screen and (max-width: 800px) {
  .categories-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>