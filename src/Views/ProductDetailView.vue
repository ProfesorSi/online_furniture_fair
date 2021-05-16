<template>
  <div class="product-detail">
    <div class="header">
      <div class="image-left">
        <img class="malagic" :src="exhibitorImageURL" alt="Logo" />
      </div>
      <div class="vendor-info">
        <h3>{{ exhibitor }}</h3>
        <div class="icons">
          <li v-if="phone">telefon: {{ phone }}</li>
          <li v-if="email"> <a :href="mailto">{{ email }}</a></li>
          
          
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
        <img :src="imageURL" alt="" class="image"/>
        <div class="images">
          <img v-if="imageURL1" :src="imageURL1" alt="" />
          <img v-if="imageURL2" :src="imageURL2" alt="" />
          <img v-if="imageURL3" :src="imageURL3" alt="" />
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
      exhibitorImageURL: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      description: "",
      price: "",
      imageURL: "",
      imageURL1: "",
      imageURL2: "",
      imageURL3: "",
      exhibitor: "",
      mailto: "mailto:" + this.email
    };
  },

  props: {
    // exhibitor: String
  },
  methods: {},
  beforeCreate() {
    console.log(this.mailto)
    axios
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/products/" +
          this.$route.params.id
      )
      .then((response) => {
        this.title = response.data.title;
        this.description = response.data.description;
        this.price = response.data.price;
        this.imageURL = response.data.imageURL;
        this.imageURL1 = response.data.imageURL1;
        this.imageURL2 = response.data.imageURL2;
        this.imageURL3 = response.data.imageURL3;
        this.exhibitor = response.data.exhibitor;

      });
  },
  beforeMount() {
      axios
      .get(
        "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/exhibitors/title/" +
          this.$route.params.exhibitor
      )
      .then((response) => {
        this.exhibitorImageURL = response.data[0].imageURL;
        this.email = response.data[0].email;
        this.phone = response.data[0].phone;

      });
  }
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
}

.image-container {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
}

.image-container img {
  width: 100%;
  object-fit: contain;
  max-height: 400px;
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
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
</style>