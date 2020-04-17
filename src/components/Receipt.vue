<template>
  <!-- Modal Receipt -->
  <div class="modal modal-receipt">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <div class="receipt-head">
          <div class="modal-checkout">
            <p class="checkout-title">Checkout</p>
            <p>Cashier : Pevita Pearce</p>
          </div>
          <div class="receipt-number">
            <p>Receipt no: #010410919</p>
          </div>
        </div>
        <hr>
        <ul class="receipt-detail">
          <li>Coffee Latte 1x</li>
          <li>Rp. 15.000</li>
        </ul>
        <ul class="receipt-detail">
          <li>Coffee Latte 1x</li>
          <li>Rp. 15.000</li>
        </ul>
        <ul class="receipt-detail">
          <li>Coffee Latte 1x</li>
          <li>Rp. 15.000</li>
        </ul>
        <ul class="receipt-detail receipt-total">
          <li>Total</li>
          <li>Rp. 150.000</li>
        </ul>
        <ul class="receipt-detail receipt-payment">
          <li>Payment :</li>
          <li>Cash</li>
        </ul>
        <div class="button-receipt">
          <button class="button is-medium is-fullwidth bg-pink" @click="receipt">Print</button>
          <p>Or</p>
          <button class="button is-medium is-fullwidth bg-blue">
            Send Email</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Receipt',
  methods: {
    receipt() {
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
  },
};
</script>

<style scoped lang="scss">
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
