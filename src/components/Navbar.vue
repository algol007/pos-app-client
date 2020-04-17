<template>
  <!-- <div class=" navbar columns is-gapless">
    <div class="column panels">
      <i class="fas fa-bars"></i>
    </div>
    <div class="column lists">
      History
    </div>
  </div>   -->
  <div class=" navbar columns is-gapless">
    <div class="column panels">
      <i class="fas fa-bars"></i>
    </div>
    <div class="column lists">
      Food Items
    </div>
    <div class="column is-4 order">
      Cart
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
  .navbar{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    align-items: center;
    box-shadow: 4px 1px 5px rgba($color: #000000, $alpha: 0.2);
    margin: 0 !important;
  }
  .panels{
    max-width: 60px;
    font-size: 1.5em;
    text-align: center;
  }
  .lists, .order{
    text-align: center;
    font-size: 1.2em;
  }
  .order{
    border-left: 1px solid #696969;
  }
</style>
