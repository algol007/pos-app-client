<template>
  <div class="home">
    <Navbar />
    <div class="columns is-gapless">
      <Sidebar @add="addItem" />
      <div class="column menu-lists">
        <div class="display-menu">
          <CardItem @check="isCheck" v-for="product in items" :key="product.id"
          :name="product.name" :price="product.price" :image="img" />
        </div>
      </div>
      <div class="column is-4 menu-order">
        <div class="no-order">
          <div class="image-no-order">
          </div>
          <div class="text-no-order">
            <p class="no-order-title">Your cart is empty</p>
            <p>Please add some items from the menu</p>
          </div>
        </div>
        <div class="ordered">
          <div class="is-order">
            <OrderItem @plus="addQty" @minus="reduceQty" :qty="this.qty"
            :total="totalPrice.price" />
            <div class="column checkout">
              <div class="total-price">
                <p>Total Price</p>
                <p>Rp. {{ totalPrice.price }}</p>
              </div>
              <div class="ppn">
                <p>*Belum termasuk PPN</p>
              </div>
              <button class="button is-fullwidth button-checkout bg-blue" @click="receipt">
                Checkout</button>
              <button class="button is-fullwidth button-checkout bg-pink" @click="cancelOrder">
                Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddItem />
    <Receipt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import CardItem from '../components/CardItem.vue';
import AddItem from '../components/AddItem.vue';
import OrderItem from '../components/OrderItem.vue';
import Receipt from '../components/Receipt.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    CardItem,
    AddItem,
    OrderItem,
    Receipt,
  },
  data() {
    return {
      page: null,
      url: process.env.VUE_APP_BASE_URL,
      qty: 1,
      total: 10000,
      image: null,
    };
  },
  methods: {
    receipt() {
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
    addItem() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
    },
    isCheck() {
      const check = document.querySelector('.card-overlay');
      check.classList.toggle('show');
      this.cancelOrder();
    },
    cancelOrder() {
      const cancel = document.querySelector('.ordered');
      cancel.classList.toggle('hide');
      const noOrder = document.querySelector('.no-order');
      noOrder.classList.toggle('hide');
    },
    addQty() {
      this.qty += 1;
    },
    reduceQty() {
      this.qty -= 1;
      this.totalPrice();
      if (this.qty < 1) {
        // const card = document.querySelector('.card-order');
        // card.classList.toggle('hide');
        // this.isCheck();
      }
    },
  },
  mounted() {
    this.$store.dispatch('getAllItems');
    const noOrder = document.querySelector('.ordered');
    noOrder.classList.toggle('hide');
  },
  computed: {
    totalPrice() {
      return {
        price: this.total * this.qty,
      };
    },
    items() {
      return this.$store.state.products;
    },
    img() {
      return {
        backgroundImage: `url(${this.image})`,
        // backgroundColor: 'red',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
  }
  .menu-lists{
    margin-left: 60px !important;
    background: rgba(190, 195, 202, 0.3);
  }
  .display-menu{
    padding: 1em;
    padding-top: 76px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    min-height: 100vh;
  }
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
</style>
