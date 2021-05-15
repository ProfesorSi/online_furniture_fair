<template>
  <div class="exhibitorProducts">
    <!-- <router-link
          :to="{
            name: 'ProductDetailView',
            params: {
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
              imageURL: product.imageURL,
              exhibitor: product.exhibitor
            },
            props: { title: product.title, description: product.description },
          }"
        > -->
    <div
      class="image-container"
      v-for="(product, index) in products"
      :key="index"
    >
      <router-link
        :to="{
          name: 'ProductDetailView',
          params: {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            imageURL: product.imageURL,
            imageURL1: product.imageURL1,
            imageURL2: product.imageURL2,
            imageURL3: product.imageURL3,

            exhibitor: product.exhibitor,
          },
        }"
      >
        <div class="image">
          <img alt="Izdvojeno" :src="product.imageURL" />
          <p>
            {{ product.title }} <br />
            <span v-if="product.price"
              ><span style="color: black">Sajamska cijena</span>
              {{ product.price }}KM</span
            >
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  props: {
    exhibitor: String,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    console.log("exhibitor", this.exhibitor);
    axios
    .get("http://localhost:8080/api/products/izlagac/" + this.exhibitor)
      // .get(
      //   "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/izlagac/" +
      //     this.exhibitor
      // )
      .then((response) => {
        this.products = response.data;
        console.log(this.products);
      });
  },
};
</script>


<style scoped>
.exhibitorProducts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.image-container {
  width: 300px;
  height: 300px;
}

.image {
  width: 250px;
  height: 140px;
  margin: 20px;
  margin-bottom: 10px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
</style>