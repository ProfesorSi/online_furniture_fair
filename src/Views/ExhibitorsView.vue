<template>
  <div class="exhibitors-container">
    <h2>Izlagači</h2> <hr>
    <div class="flex">
      <div
        class="image-container"
        v-for="(exhibitor, index) in exhibitors"
        :key="index"
      >
        <router-link
          :to="{
            name: 'ExhibitorDetailView',
            path: '/proizvodi/',

            params: {
              id: exhibitor.id,
              title: exhibitor.title
            },
            
          }"
        >
          <div class="images"><img :src="exhibitor.imageURL" alt="" /></div>
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
      exhibitorName: String,
    };
  },
  mounted() {
    axios
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/exhibitors"
      )
      .then((response) => {
        console.log(response.data);
        this.exhibitors = response.data;
        this.exhibitorName = response.data[0].title;
        console.log("Exhibitiros name", this.exhibitorName);
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

@media only screen and (max-width: 600px) {

  h2 {
    text-align: center;
  }
  .exhibitors-container {
    /* display: flex;
    justify-content: center;
    text-align: center; */
    columns: 2;
    margin-left: 50px;
    
  }

  .flex {
    width: 100%;
     display: flex;
    justify-content: center;
  }
}
</style>