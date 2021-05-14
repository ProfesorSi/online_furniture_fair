<template>
  <div class="product-detail">
    <div class="header">
      <div class="image-left">
        <img
          class="malagic"
          src="../images/vendorLogos/malagic_logo.png"
          alt="Malagic"
        />
      </div>
      <div class="vendor-contact">
        <div>
          <img
            class="malagic"
            src="../images/vendorLogos/malagic_logo.png"
            alt="Malagic"
          />
        </div>
        <div class="vendor-info">
          <h3>Malagic</h3>
          <div class="icons">
            <img
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
            />
          </div>
        </div>
      </div>
    </div>

    <div class="product-container">
      <div class="image"><img alt="Izdvojeno" :src="imageURL" /></div>
      <div class="product-description">
        <h2>{{ title }}</h2>
        <p>
          {{ description }}
        </p>
        <p class="price">{{ price }}KM</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    description: String,
    price: Number,
    imageURL: String,
  },
  methods: {},
};
</script>


<style scoped>
.product-detail {
  /* padding-right: 70px; */
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.image {
  width: 500px;
  height: 250px;
}

.image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.malagic {
  width: 100px;
  height: 100px;
}

.vendor-info {
  display: flex;
  flex-direction: column;
  margin-top: -15px;
  margin-left: 20px;
}
.vendor-info h3 {
  font: bold;
  margin: 10px;
}

.vendor-contact {
  display: flex;
  justify-content: space-between;
}

.icons img {
  margin: 5px;
}

.phone_icon,
.mail_icon,
.www_icon {
  background: yellow;
  border-radius: 50%;
  padding: 5px;
}

.product-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
}

.product-description {
  margin-top: -26px;
  width: 100%;
  padding: 20px;
  padding-top: 0;
}

.product-description p {
  font-weight: 300;
}

.price {
  color: #ffc501;
}

@media screen and (max-width: 800px) {
  .image-left {
    display: none;
  }

  .product-detail {
    padding-right: 0;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .icons {
    display: flex;
  }

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
}
</style>