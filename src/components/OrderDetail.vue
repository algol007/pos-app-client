<template>
  <div class="column is-4 menu-order">
    <div class="no-order" v-if="orderItem.length == 0">
      <div class="image-no-order">
      </div>
      <div class="text-no-order">
        <p class="no-order-title">Your cart is empty</p>
        <p>Please add some items from the menu</p>
      </div>
    </div>
    <div class="ordered" v-else>
      <div class="is-order">
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
                <li @click="reduceQty(order.id)">-</li>
                <li>{{ qty }}</li>
                <li @click="addQty(order.id)">+</li>
              </ul>
              <p>Rp. {{ qty * order.price }}</p>
            </div>
          </div>
        </div>
        <div class="column checkout">
          <div class="total-price">
            <p>Total Price</p>
            <p>Rp. {{ total }}</p>
          </div>
          <div class="ppn">
            <p>*Belum termasuk PPN</p>
          </div>
          <button class="button is-fullwidth button-checkout bg-blue"
          @click="$emit('receipt')">
            Checkout</button>
          <button class="button is-fullwidth button-checkout bg-pink"
          @click="$emit('cancelOrder')">
            Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import OrderItem from './OrderItem.vue';

export default {
  name: 'OrderDetail',
  data() {
    return {
      qty: 1,
      count: 0,
      orders: [],
      total: 0,
    };
  },
  methods: {
    addQty(id) {
      this.qty += 1;
      // console.log(id);
      this.$store.dispacth('addQty', id, this.qty);
    },
    reduceQty() {
      if (this.qty === 1) {
        this.qty = 1;
      } else {
        this.qty -= 1;
      }
    },
    totalPrice() {
      this.orders = this.orderItem;
      // console.log(this.orders);
      const total = [];
      for (let i = 0; i < this.orders.length; i += 1) {
        total.push(this.orders[i].price);
      }
      // console.log(total);
      this.total = total.reduce((a, b) => a + b);
    },
  },
  updated() {
    this.totalPrice();
  },
  computed: {
    orderItem() {
      return this.$store.state.selected;
    },
  },
};
</script>

<style scoped lang="scss">
  .ordered, .no-order{
    padding-top: 60px;
  }
  .no-order{
    margin: 1em auto;
  }
  .image-no-order{
    background-image: url('../../public/img/food-and-restaurant.png');
    background-size: cover;
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  .text-no-order{
    text-align: center;
    color: #CECECE;
  }
  .no-order-title{
    color: #000000;
    font-size: 1.5em;
  }
  .ordered{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-content: space-between;
  }
  .is-order{
    display: flex;
    flex-direction: column;
    // border: 1px solid #eaeaea;
    padding: 1em;
  }
  .checkout{
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 20px;
    margin-top: 3em;
    padding: 0;
  }
  .button-checkout{
    margin: 5px 0;
  }
  .total-price{
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
    font-weight: bold;
  }
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
