<template>
  <div class="stand">
    <div class="exhibitor-container">
      <div class="image-container">
        <img :src="imageURL" alt="" />
      </div>
      <h3>{{ title }}</h3>
      <span v-if="title == `Dallas International`"
        >Safeta Zajke bb, RAJLOVAC</span
      >
      <span v-if="title == `Dallas International`"
        >Maršala Tita 237,MOSTAR</span
      >
      <p>{{ description }}</p>
      <router-link
        :to="{
          name: 'ExhibitorProductsView',
          params: {
            exhibitor: this.title,
          },
        }"
        ><button>Pogledajte proizvode</button></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      description: "",
      imageURL: "",
    };
  },
  mounted() {

    axios
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/exhibitors/" +
          this.$route.params.id
      )
      .then((response) => {
        this.title = response.data.title;
        this.description = response.data.description;
        this.imageURL = response.data.imageURL;
      });
  },
  onUnmounted() {
  }
};
</script>

<style scoped>
.stand {
  width: 100%;
  height: 100vh;
  background-image: url("../../src/images/stand.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;

  /* border-left: 10px solid rgb(158, 158, 158); */
}

.image-container {
  width: 180px;
  height: 180px;
}

.image-container img {
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  padding: 10px;
  border-radius: 10px;
  margin-left: -12px;
  object-fit: cover;
}

p {
  padding: 50px;
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  margin-top: -20px;
}

.exhibitor-container {
  /* width: 500px;
  
  float: right;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 500px;
  text-align: center;
  height: 100%;
  position: absolute;

  right: 0;
  align-items: center;
  background: rgb(0, 0, 0, 0.8);
}

button {
  padding: 15px;
  background: #ffc501;
  border: none;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 700;
  color: white;
}

@media only screen and (max-width: 800px) {
  .stand {
    width: 100%;
  }

  .exhibitor-container {
    width: 100%;
  }
}
</style>