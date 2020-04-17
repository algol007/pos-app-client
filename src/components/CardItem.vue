<template>
  <div class="card card-item" @click="$emit('check')">
    <div class="card-overlay"><i class="far fa-check-circle"></i></div>
    <div class="card-image">
    </div>
    <div class="card-content">
      <div class="media-content">
        <p>{{ name }}</p>
        <p><strong>Rp. {{ price }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
    'name',
    'price',
  ],
};
</script>

<style scoped lang="scss">
  .card-overlay{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    position: absolute;
    z-index: 2;
    color: #ffffff;
    font-size: 4em;
    text-align: center;
    padding: 30px 0;
    display: none;
  }
  .card-item{
    width: 175px;
    height: 175px;
    margin: 0.5em;
  }
  .card-image{
    background-image: url('../../public/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png');
    background-size: cover;
    height: 125px;
  }
  .card-content{
    padding: 0.2em 1em;
    font-size: 0.8em;
  }
</style>
