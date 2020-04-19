<template>
  <div class="navbar columns is-gapless">
    <div class="column panels">
      <i class="fas fa-bars"></i>
    </div>
    <div class="column lists">
      {{ title }}
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
  props: [
    'title',
  ],
};
</script>

<style lang="scss" scoped>
  .navbar{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    box-shadow: 4px 1px 5px rgba($color: #000000, $alpha: 0.2);
    margin: 0 !important;
    flex-wrap: nowrap;
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
