<template>
  <div>
    <!-- Photo Grid -->
    <div class="gallery">
      <div class="row">
        <img
          alt="Izdvojeno"
          src="../images/soba.png"
          style="width: 100%; max-height: 100%"
        />
        <img
          alt="Izdvojeno"
          src="../images/kaktus.png"
          style="width: 100%; max-height: 100%"
        />
        <img
          alt="Izdvojeno"
          src="../images/bojanka.png"
          style="width: 100%; max-height: 100%"
        />
        <img
          alt="Izdvojeno"
          src="../images/outdoor.png"
          style="width: 100%; max-height: 100%"
        />
      </div>
      <div class="row">
        <div class="image-container">
          <img
            alt="Izdvojeno"
            src="../images/spavaca.png"
            style="width: 100%; max-height: 100%"
          />
        </div>

        <img
          alt="Izdvojeno"
          src="../images/trpezarija.png"
          style="width: 100%; max-height: 100%"
        />
        <img
          alt="Izdvojeno"
          src="../images/radna_soba.png"
          style="width: 100%; max-height: 100%"
        />

        <img
          alt="Izdvojeno"
          src="../images/majstor.png"
          style="width: 100%; max-height: 100%"
        />
      </div>
      <div class="row">
        <img
          alt="Izdvojeno"
          src="../images/kuhinja.png"
          style="width: 100%; max-height: 100%"
        />

        <img
          alt="Izdvojeno"
          src="../images/garderober.png"
          style="width: 100%; max-height: 100%"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.gallery {
  display: flex;
  flex-direction: row;
}

.row {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 100%;
  padding: 0 4px;
}

.row img {
  padding: 10px;
  border-radius: 30px;
}

@media screen and (max-width: 800px) {
  .gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>