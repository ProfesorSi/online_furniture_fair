<template>
  <div class="wrapper">
    <div class="shadow">
      <!-- <img
        alt="Izdvojeno"
        src="../assets/group1A.png"
        style="width: 50px; max-height: 50px"
      /> -->
      <p>{{ category }}</p>
    </div>

    <div class="row">
      <!-- <router-link to="/product/1">  </router-link> -->

      <div
        class="image-container"
        v-for="(product, index) in furniture"
        :key="index"
      >

        <router-link
          :to="{
            name: 'ProductDetailView',
            params: {
              id: product.id,
              exhibitor: product.exhibitor
            },
          }"
        >
          <div class="image">
            <img v-if="product.imageURL" alt="Izdvojeno" :src="product.imageURL" />
            <p>
              {{ product.title }} <br />
              <span
                ><span v-if="product.price" style="color: black">Sajamska cijena</span>
                {{ product.price }}KM</span
              >
            </p>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  props: {
    category: String,
  },
  data() {
    return {
      furniture: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/category/" +
          this.$route.params.category
      )
      .then((response) => {
        this.furniture = response.data;
      });
  },
};
</script>


<style scoped>
.wrapper {
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.image-container,
.image {
  width: 300px;
  height: 250px;
  margin-bottom: 100px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
}

span {
  color: #ffc501;
}

.shadow {
  display: flex;
  align-items: center;
}

.shadow p {
  padding-left: 20px;
}

@media screen and (max-width: 800px) {
}
</style>