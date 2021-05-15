<template>
  <div class="partners">
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
      <img alt="Izdvojeno" src="../images/partners/tnt.png" />
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.partners {
  width: 100%;
  columns: 4;
  margin: 20px;
  height: 50vh;
}

.image {
  width: 180px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 30px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 800px) {
  .partners {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   align-items: center;
   align-self: center;
  }
}
</style>