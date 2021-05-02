<template>
  <div class="wrapper">
    <div class="shadow">
      <img
        alt="Izdvojeno"
        src="../assets/group1A.png"
        style="width: 50px; max-height: 50px"
      />
      <p>Dnevni boravak</p>
    </div>

    <div class="row">
      <!-- <router-link to="/product/1">  </router-link> -->
      <router-link to="/product/1">
        <div class="image-container">
          <img alt="Izdvojeno" src="../assets/sofa1.png" />
          <p>
            Suprima dvosjed <br />
            <span>1560KM</span>
          </p>
        </div></router-link
      >
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa2.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa2.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa1.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa1.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa2.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa2.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
      <div class="image-container">
        <img alt="Izdvojeno" src="../assets/sofa1.png" />
        <p>
          Suprima dvosjed <br />
          <span>1560KM</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style scoped>
.wrapper {
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.image-container {
  width: 300px;
  height: auto;
  padding: 20px;
}

img {
  width: 100%;
  height: 80%;
  border-radius: 20px;
  object-fit: cover;
}

span {
  color: #ffc501;
}

.shadow {
  display: flex;
  align-items: center;
}

.shadow p {
  padding-left: 20px;
}

@media screen and (max-width: 800px) {
}
</style>