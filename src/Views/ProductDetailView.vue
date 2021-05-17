<template>
  <div class="product-detail">
    <div class="header">
      <div class="image-left">
        <img
          v-if="exhibitorImageURL"
          class="exhibitor-logo"
          :src="exhibitorImageURL"
          alt="Logo"
        />
      </div>
      <div class="vendor-info">
        <h3>{{ exhibitor }}</h3>
        <div class="icons">
          <li v-if="phone">telefon: {{ phone }}</li>
          <hr>
          

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
        <img :src="imageURL" alt="" class="image" />
        <div class="images">
          <img class="image1" v-if="imageURL1" :src="imageURL1" alt="" />
          <img class="image2" v-if="imageURL2" :src="imageURL2" alt="" />
          <img class="image3" v-if="imageURL3" :src="imageURL3" alt="" />
        </div>
      </div>
      <div class="product-details">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p class="price" v-if="price">{{ price }}KM</p>

        <h2>POŠALJITE UPIT</h2>
         <li v-if="email">
            <a :href="mailto">{{ email }}</a>
          </li>
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
      mailto: "mailto:" + this.email,
    };
  },

  props: {
    // exhibitor: String
  },
  methods: {},
  beforeCreate() {
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

        axios
          .get(
            "https://furniture-fair-auth-api-gweza.ondigitalocean.app/crud-api/api/exhibitors/title/" +
              this.exhibitor
          )
          .then((response2) => {
            this.exhibitorImageURL = response2.data[0].imageURL;
            this.email = response2.data[0].email;
            this.phone = response2.data[0].phone;
            this.mailto = `mailto:` + this.email;
          });
      });
  },
};
</script>


<style scoped>

.upit {
  display: none;
}
.image1,
.image2,
.image3 {
  transition: transform 0.2s;
}

.image1:hover,
.image2:hover,
.image3:hover {
  transform: scale(
    3.5
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  margin-left: auto;
}

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

.exhibitor-logo {
  width: 120px;
}

.exhibitor-logo img {
  width: 100%;
  object-fit: contain;
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

@media (hover: none) {
}

@media only screen and (max-width: 1000px) {

  .upit {
    display: block;
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .product-detail {
    display: flex;
    flex-direction: column;
  }

  .product {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .exhibitor-logo {
    width: 20px;
  }

  .image-container {
    margin: auto;
  }

  .image-container img {
    max-width: 360px;
  }

  .images {
    width: 500px;
    display: flex;
    flex-direction: column;
  }

  .image1,
  .image2,
  .image3 {
    max-width: 400px;
  }

  .image1,
  .image2,
  .image3 {
    transition: transform 0.2s;
  }

  .image1:hover,
  .image2:hover,
  .image3:hover {
    transform: scale(
     2.0
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    margin-top: 70px;
    margin-left: 77px;
  
  }
}
</style>