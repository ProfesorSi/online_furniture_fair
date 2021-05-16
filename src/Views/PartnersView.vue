<template>
  <div class="partners">
    <img class="image" alt="Izdvojeno" src="../images/partners/face_tv.png" />
    <img class="image" alt="Izdvojeno" src="../images/partners/akta.png" />
    <img class="image" alt="Izdvojeno" src="../images/partners/interreg.png" />
    <img class="image" alt="Izdvojeno" src="../images/partners/kalman.jpg" />
    <img class="image" alt="Izdvojeno" src="../images/partners/logo.png" />
    <img class="image" alt="Izdvojeno" src="../images/partners/mrak.png" />
    <img class="image" alt="Izdvojeno" src="../images/partners/mrlja.png" />
    <img class="image" alt="Izdvojeno" src="../images/partners/tnt.png" />
     <img class="image stan" alt="Izdvojeno" src="../images/partners/stanpromet.png" />
          <img class="image stan" alt="Izdvojeno" src="../images/partners/fena.jpg" />

    <img
      class="image"
      alt="Izdvojeno"
      src="../images/partners/privredna_komora.png"
    />
    <div class="image"><p>VANJSKOTRGOVINSKA KOMORA BOSNE I HERCEGOVINE</p></div>
   
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
  padding: 5px;
}

.image {
  width: 200px;
  height: 180px;
  margin: 5px;
  border: 2px solid black;
  border-radius: 10px;
}
.image p {
  text-align: center;
  background: #ffc501;
  height: 130px;
  margin: 0;
  border-radius: 10px;
  vertical-align: sub;
  padding-top: 50px;
  font-weight: 900;
}



.image img {
  width: 100%;
  object-fit: contain;
}
@media screen and (max-width: 800px) {
}
</style>