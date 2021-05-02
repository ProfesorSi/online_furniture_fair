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
      <div class="image"><img alt="Izdvojeno" src="../assets/sofa2.png" /></div>
      <div class="product-description">
        <h2>Suprima dvosjed</h2>
        <p>
          She suspicion dejection saw instantly. Well deny may real one told yet
          saw hard dear. Bed chief house rapid right the. Set noisy one state
          tears which. No girl oh part must fact high my he. Simplicity in
          excellence melancholy as remarkably discovered. Own partiality
          motionless was old excellence she inquietude contrasted. Sister giving
          so wicket cousin of an he rather marked. Of on game part body rich.
          Adapted mr savings venture it or comfort affixed friends.
        </p>
       <p class="price"> 1560KM</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.product-detail {
  padding-right: 70px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
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

.phone_icon, .mail_icon, .www_icon {
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
  width: 60%;
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
    justify-content: center;
  }

  .icons {
    display: flex;
  }

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
</style>