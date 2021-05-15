<template>
  <div class="product-detail">
    <div class="header">
      <div class="image-left">
        <img class="malagic" :src="urlString" alt="Logo" />
      </div>
      <div class="vendor-info">
        <h3>{{ exhibitor }}</h3>
        <div class="icons">
          <li>telefon: {{ phone }}</li>
          <li>email: {{ email }}</li>
          <!-- <img
              class="phone_icon"
              src="../images/icons/phone_icon.png"
              alt="Malagic"
            />
            <img
              class="mail_icon"
              src="../images/icons/mail_icon.png"
              alt="Malagic"
            />
            <img
              class="www_icon"
              src="../images/icons/www_icon.png"
              alt="Malagic"
            /> -->
        </div>
      </div>
    </div>
    <div class="product">
      <div class="image-container">
        <img :src="imageURL" alt="" class="image" width="600" height="400" />
        <div class="images">
          <img :src="imageURL1" alt="" />
          <img :src="imageURL2" alt="" />
          <img :src="imageURL3" alt="" />
        </div>
      </div>
      <div class="product-details">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p class="price" v-if="price">{{ price }}KM</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      urlString: "",
      phone: "",
      email: "",
      website: "",
    };
  },

  props: {
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    imageURL1: String,
    imageURL2: String,
    imageURL3: String,
    exhibitor: String,
  },
  methods: {},
  mounted() {
    console.log(this.exhibitor);
    axios
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/exhibitors/title/" +
          this.exhibitor
      )
      .then((response) => {
        console.log(response.data);
        this.urlString = response.data[0].imageURL;
        this.phone = response.data[0].phone;
        this.email = response.data[0].email;
        console.log("PHONE", this.phone);
      });
  },
};
</script>


<style scoped>
.product-detail {
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
}

.header img {
  width: 150px;
}

.phone_icon,
.mail_icon,
.www_icon {
  background: yellow;
  border-radius: 50%;
  padding: 5px;
}

.vendor-contact {
  display: flex;
  justify-content: space-between;
}

.vendor-info {
  display: flex;
  margin-left: 20px;
  margin-top: -23px;
  flex-direction: column;
}

.icons li {
  list-style-type: none;
}

.exhibitor {
  width: 120px;
}

.exhibitor img {
  width: 100%;
}

.product {
  display: flex;
  margin-top: 50px;
}

.product-details {
  margin-left: 40px;
}

.image {
  width: 100%;
  height: 300px;
}

.image-container {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
}

.image-container img {
  width: 100%;
  object-fit: cover;
}

.images {
  display: flex;
}

.images img {
  width: 200px;
  height: 100px;
  margin-top: 10px;
  padding: 2px;
}

@media only screen and (max-width: 800px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .product-detail {
    width: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center; */
    columns: 1;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
</style>