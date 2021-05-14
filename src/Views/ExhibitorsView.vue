<template>
  <div class="exhibitors">
    <h2>Izlagači</h2>
    <div class="flex">
      <div
        class="image-container"
        v-for="(exhibitor, index) in exhibitors"
        :key="index"
      >
        <router-link
          :to="{
            name: 'ExhibitorDetailView',
            params: {
              title: exhibitor.title,
              description: exhibitor.description,
              imageURL: exhibitor.imageURL,
            },
          }"
        >
          <img :src="exhibitor.imageURL" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      exhibitors: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/exhibitors")
      .then((response) => {
        console.log(response.data);
        this.exhibitors = response.data;
      });
  },
};
</script>

<style scoped>
.flex {
  width: 1000px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.image-container {
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;
  margin-bottom: 50px;
}

img {
  width: 100%;
}
</style>