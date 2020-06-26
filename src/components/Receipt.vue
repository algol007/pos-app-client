<template>
  <!-- Modal Receipt -->
  <div class="modal modal-receipt">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body" ref="print">
        <strong class="close" @click="close">x</strong>
        <br>
        <div class="receipt-head">
          <div class="modal-checkout">
            <p class="checkout-title">Checkout</p>
            <p>Cashier : {{ user.name }}</p>
          </div>
          <div class="receipt-number">
            <p>Receipt no: #010410919</p>
          </div>
        </div>
        <hr>
        <ul class="receipt-detail" v-for="order in orders" :key="order.data.id">
          <li>{{ order.qty }} x {{ order.data.name }}</li>
          <li>Rp. {{ order.data.price }}</li>
        </ul>
        <ul class="receipt-detail receipt-total">
          <li>Total</li>
          <li>Rp. {{ total }}</li>
        </ul>
        <ul class="receipt-detail receipt-payment">
          <li>Payment :</li>
          <li>Cash</li>
        </ul>
      </section>
      <div class="button-receipt">
        <button class="button is-medium is-fullwidth bg-pink" @click="print">Print</button>
        <p>Or</p>
        <button class="button is-medium is-fullwidth bg-blue" @click="sendEmail">
          Send Email</button>
      </div>
    </div>
  </div>
</template>

<script>
import jspdf from 'jspdf';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Receipt',
  data() {
    return {
      total: 0,
    };
  },
  methods: {
    ...mapActions('order', ['cancelOrder']),
    close() {
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
    print() {
      const doc = new jspdf(); // eslint-disable-line
      const html = this.$refs.print.innerHTML;

      doc.fromHTML(html, 15, 15, {
        width: 150,
      });

      doc.autoPrint({ variant: 'non-conform' });
      doc.save('autoprint.pdf');

      this.cancelOrder();
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
    sendEmail() {
      this.$swal.fire({
        title: 'Are you sure to send email?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Send Email',
      }).then((result) => {
        if (result.value) {
          this.$router.push('/sendemail');
        }
      });

      this.cancelOrder();
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
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
    ...mapState('user', ['user']),
    ...mapState('order', ['orders']),
  },
};
</script>

<style scoped lang="scss">
  .modal-card{
    background-color: #ffffff;
  }
  .modal-card-body{
    padding-bottom: 0;
  }
  .close{
    text-align: center;
    border: 1px solid #111111;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    float: right;
    display: block;
    cursor: pointer;
    font-size: 18px;
  }
  .receipt-detail{
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
    margin: 20px;
  }
  .button-receipt{
    padding: 20px;
  }
  .button-receipt p{
    text-align: center;
    margin: 5px 0;
    font-size: 1.1em;
  }
  .receipt-head{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 0 20px;
  }
  .checkout-title{
    font-size: 1.5em;
  }
  .receipt-number{
    font-size: 1.2em;
  }
  .receipt-total{
    justify-content: flex-end;
  }
  .receipt-total li:nth-child(1){
    margin-right: 20px;
  }
  .receipt-payment{
    justify-content: flex-start;
  }
  .receipt-payment li:nth-child(1), .button-item:nth-child(1){
    margin-right: 20px;
  }
</style>
