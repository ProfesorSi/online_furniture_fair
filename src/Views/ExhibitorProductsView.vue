<template>
  <div class="exhibitorProducts">
    <div
      class="image-container"
      v-for="(product, index) in products"
      :key="index"
    >
      <div class="image">
        <img alt="Izdvojeno" :src="product.imageURL" />
        <p>
          {{ product.title }} <br />
          <span
            ><span style="color: black">Sajamska cijena</span>
            {{ product.price }}KM</span
          >
        </p>
      </div>
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
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/izlagac/" +
          this.exhibitor
      )
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
  height: 150px;
  margin: 20px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>