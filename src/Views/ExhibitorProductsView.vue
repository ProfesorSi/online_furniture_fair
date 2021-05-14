<template>
  <div>
      <h1>Exhibors products</h1>
  </div>
</template>


<script>
import axios from "axios";

export default {
  props: {
    title: String,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("https://crud.sajamnamjestaja.com/api/products/izlagac/" + this.title)
      .then((response) => {
        console.log(this.category);
        this.products = response.data;
      });
  },
};
</script>


<style scoped>

</style>