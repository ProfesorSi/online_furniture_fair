<template>
  <div class="partner-detail">
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

    <div class="partner">
      <h3>O partneru</h3>
      <p>
        She suspicion dejection saw instantly. Well deny may real one told yet
        saw hard dear. Bed chief house rapid right the. Set noisy one state
        tears which. No girl oh part must fact high my he. Simplicity in
        excellence melancholy as remarkably discovered. Own partiality
        motionless was old excellence she inquietude contrasted. Sister giving
        so wicket cousin of an he rather marked. Of on game part body rich.
        Adapted mr savings venture it or comfort affixed friends.
      </p>
    </div>
    <br>
    <h3>Proizvodi</h3>
    <div class="products">
      <div class="product">
        <img src="../assets/sofa1.png" alt="Product" />
        <h3>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </h3>
      </div>
      <div class="product">
        <img src="../assets/sofa1.png" alt="Product" />
        <h3>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </h3>
      </div>
      <div class="product">
        <img src="../assets/sofa1.png" alt="Product" />
        <h3>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </h3>
      </div>
      <div class="product">
        <img src="../assets/sofa2.png" alt="Product" />
        <h3>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>



<style scoped>

.partner-detail {
    padding: 10px;
}
.malagic {
  width: 100px;
  height: 100px;
}

.vendor-contact {
  display: flex;
}

.vendor-info {
  margin-top: -23px;
  margin-left: 20px;
}

.icons img:not(:first-child) {
  margin-left: 15px;
}

.phone_icon,
.mail_icon,
.www_icon {
  background: #ffc501;
  border-radius: 50%;
  padding: 5px;
}

.partner p {
  font-weight: 300;
}

.products {
  display: flex;
}

.product {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  padding: 10px;
  width: 250px;
}

.product img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
}

span {
  color: #ffc501;
}

@media screen and (max-width: 800px) {

    .vendor-contact {
        display: flex;
        justify-content: center;
    }

    h3 {
        text-align: center;
    }

    .products {
        display: flex;
        flex-direction: column;
    }
}
</style>