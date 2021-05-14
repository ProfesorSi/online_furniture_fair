<template>
  <div class="stand">
      <h1>Exhibitors details view</h1>
  </div>
</template>

<script>
export default {

  props: {
    title: String,
    description: String,
    imageURL: String
  }

}
</script>

<style scoped>

.stand {
  width: 100%;
  background-image: url('../../src/images/stand.jpg');
 
  /* border-left: 10px solid rgb(158, 158, 158); */

}

</style>