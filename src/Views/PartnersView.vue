<template>
  <div class="partners">
   <h4>Partneri</h4>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/face_tv.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/akta.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/interreg.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/kalman.jpg" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/logo.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/mrak.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/mrlja.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/tnt-mali-logo.png" />
    </div>
    <div class="image">
      <img alt="Izdvojeno" src="../images/partners/tnt.png" />
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.image {
  width: 180px;
}

.image img {
  width: 100%;
  margin: 10px;
  object-fit: cover;
}
</style>