<template>
  <div class="order-item">
    <div class="column card-order" v-for="order in orderItem" :key="order.id">
      <div class="image-order">
        <img :src="order.image" :alt="order.image">
      </div>
      <div class="desc-order">
        <div class="name-order">
          <b>{{ order.name }}</b>
        </div>
        <div class="qty-order">
          <ul>
            <li @click="$emit('minus', order.id)">-</li>
            <li>{{ qty }}</li>
            <li @click="$emit(order.id)">+</li>
          </ul>
          <p>Rp. {{ qty * order.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  data() {
    return {
      qty: 1,
      count: 0,
      orders: [],
    };
  },
  methods: {
    addQty(id) {
      this.qty += 1;
      // console.log(id);
      this.$store.dispatch('addQty', id, this.qty);
    },
    reduceQty() {
      this.qty -= 1;
    },
  },
  computed: {
    orderItem() {
      return this.$store.state.selected;
    },
  },
};
</script>

<style scoped lang="scss">
  .name-order{
    font-size: 1.1em;
  }
  .card-order{
    width: 100%;
    max-height: 70px;
    box-shadow: none;
    // border: 1px solid #eaeaea;
    margin: 0.5em 0;
    display: flex;
    padding: 0 !important;
    align-items: center;
  }
  .image-order img{
    width: 100px;
    height: 70px;
    // background-image: url('../../public/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png');
    // background-size: cover;
    // background-position: center center;
  }
  .image-order{
    margin-right: 10px;
  }
  .desc-order{
    width: 100%;
  }
  .qty-order{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .qty-order p{
    margin-left: 20px;
  }
  .qty-order ul{
    display: flex;
    margin-top: 5px;
    align-items: center;
  }
  .qty-order ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid #eaeaea;
    font-weight: bold;
    cursor: pointer;
  }
</style>
