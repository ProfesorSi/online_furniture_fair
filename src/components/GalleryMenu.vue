<template>
  <div>
    <!-- Photo Grid -->
    <div class="gallery">
      <div class="row">
        <div class="test">
          <img
            alt="Izdvojeno"
            src="../images/soba.png"
            style="width: 100%; max-height: 100%"
          />
          <div class="shadow">
            <img
              alt="Izdvojeno"
              src="../assets/group1.png"
              style="width: 65px; max-height: 50px"
            />
            <p>Dnevni boravak</p>
          </div>
        </div>

        <div class="test">
          <img
            alt="Izdvojeno"
            src="../images/kaktus.png"
            style="width: 100%; max-height: 100%"
          />
        </div>
        <div class="test">
          <img
            alt="Izdvojeno"
            src="../images/bojanka.png"
            style="width: 100%; max-height: 100%"
          />
        </div>
        <div class="test">
          <img
          alt="Izdvojeno"
          src="../images/outdoor.png"
          style="width: 100%; max-height: 100%"
        />
        </div>
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
.test {
  width: 100%;
  height: 240px;
}

.test img {
  object-fit: cover;
}

.shadow {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  margin-right: 10px;

  border-radius: 0 0 20px 20px;
  margin-top: -85px;

  position: relative;
  margin-left: 10px;

  z-index: 1;
}

.shadow p {
  color: white;
  font-weight: 100;
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