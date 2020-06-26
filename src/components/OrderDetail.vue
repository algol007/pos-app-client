<template>
  <div class="column is-4 menu-order">
    <div class="no-order" v-if="orders.length == 0">
      <div class="image-no-order">
      </div>
      <div class="text-no-order">
        <p class="no-order-title">Your cart is empty</p>
        <p>Please add some items from the menu</p>
      </div>
    </div>
    <div class="ordered" v-else>
      <div class="is-order">
        <div class="column card-order" v-for="order in orders" :key="order.id">
          <div class="image-order">
            <img :src="order.data.image" :alt="order.data.image">
          </div>
          <div class="desc-order">
            <div class="name-order">
              <b>{{ order.data.name }}</b>
            </div>
            <div class="qty-order">
              <ul>
                <li @click="reduceQty(order)">-</li>
                <li>{{ order.qty }}</li>
                <li @click="addQty(order)">+</li>
              </ul>
              <p>Rp. {{ order.qty * order.data.price }}</p>
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
          @click="receipt">
            Checkout</button>
          <button class="button is-fullwidth button-checkout bg-pink"
          @click="cancel">
            Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'OrderDetail',
  data() {
    return {
      qty: 1,
      total: 0,
    };
  },
  methods: {
    ...mapActions('order', ['cancelOrder', 'add', 'reduce']),
    addQty(data) {
      this.add(data);
    },
    reduceQty(data) {
      this.reduce(data);
    },
    receipt() {
      if (this.user.length === 0) {
        this.$swal.fire({
          title: 'Unable action',
          text: 'You have to login first!',
          icon: 'error',
          showCancelButton: true,
          confirmButtonText: 'Yes, Login',
          cancelButtonText: 'No, Thank You',
        }).then((result) => {
          if (result.value) {
            this.$router.push('/auth/login');
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire(
              'Cancelled',
              'Your file is safe :)',
              'error',
            );
          }
        });
      } else {
        const receipt = document.querySelector('.modal-receipt');
        receipt.classList.toggle('is-active');
      }
    },
    cancel() {
      this.cancelOrder();
    },
    totalPrice() {
      if (this.orders.length !== 0) {
        const total = [];
        for (let i = 0; i < this.orders.length; i += 1) {
          total.push(this.orders[i].data.price * this.orders[i].qty);
        }
        this.total = total.reduce((a, b) => a + b);
      } else {
        this.total = 0;
      }
    },
  },
  updated() {
    this.totalPrice();
  },
  computed: {
    ...mapState('order', ['orders']),
    ...mapState('user', ['user']),
  },
};
</script>

<style scoped lang="scss">
  .menu-order{
    height: 100vh;
    overflow-y: scroll;
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
  @media screen and (max-width: 768px){
    .ordered{
      padding: 20px 20px 20px 80px;
      max-height: 530px;
      overflow-y: scroll;
    }
    .no-order{
      padding: 60px 0;
    }
  }
</style>
