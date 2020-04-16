<template>
  <div class="home">
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
    <div class="columns is-gapless">
      <div class="column menu-panel">
        <router-link to="/"><div class="all-menu"></div></router-link>
        <router-link to="/history"><div class="income-history"></div></router-link>
        <div class="add-menu" @click="addItem">
          <i class="fas fa-plus"></i>
        </div>
      </div>
      <div class="column menu-lists">
        <div class="display-menu">
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu" @click="isCheck">
            <div class="card-overlay"><i class="far fa-check-circle"></i></div>
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
          <div class="card card-menu">
            <div class="card-image">
            </div>
            <div class="card-content">
              <div class="media-content">
                <p>Espresso</p>
                <p><strong>Rp. 10.000</strong></p>
              </div>
            </div>
          </div>
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
            <div class="column card-order">
              <div class="image-order"></div>
              <div class="desc-order">
                <div class="name-order">
                  <b>Espresso</b>
                </div>
                <div class="qty-order">
                  <ul>
                    <li>+</li>
                    <li>1</li>
                    <li>-</li>
                  </ul>
                  <p>Rp. 10.000</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column checkout">
            <div class="total-price">
              <p>Total Price</p>
              <p>Rp. 105.000</p>
            </div>
            <div class="ppn">
              <p>*Belum termasuk PPN</p>
            </div>
            <button class="button is-fullwidth button-checkout checkout1" @click="receipt">
              Checkout</button>
            <button class="button is-fullwidth button-checkout checkout2">Cancel</button>
          </div>
        </div>
      </div>
    </div>
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
            <button class="button is-medium is-fullwidth checkout1" @click="receipt">Print</button>
            <p>Or</p>
            <button class="button is-medium is-fullwidth checkout2" @click="receipt">
              Send Email</button>
          </div>
        </section>
      </div>
    </div>
    <!-- Modal Add Item -->
    <div class="modal modal-item">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <div class="modal-item-header">
            Add Item
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Product Name">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Image</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="file">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Price</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Product Price">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Category</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Food</option>
                      <option>Drink</option>
                      <option>Desert</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-item-button">
            <button class="button checkout2 button-item" @click="addItem">Cancel</button>
            <button class="button checkout1 button-item">Add</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
    },
  },
};
</script>

<style lang="scss" scoped>
  .show{
    transition: 1s;
    display: block !important;
  }
  .columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
  }
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
  .menu-lists{
    margin-left: 60px !important;
    background: rgba(190, 195, 202, 0.3);
  }
  .menu-panel{
    width: 60px;
    height: 100vh;
    position: fixed;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.25);
  }
  .menu-order{
    display: flex;
  }
  .menu-panel, .menu-order, .menu-lists{
    margin-top: 60px !important;
  }
  .all-menu{
    background-image: url('../../public/img/fork.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 35px;
    height: 35px;
    margin: 30px auto;
  }
  .income-history{
    background-image: url('../../public/img/clipboard.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40px;
    height: 40px;
    margin: 30px auto;
  }
  .add-menu{
    text-align: center;
    font-size: 30px;
    margin: 30px auto;
  }
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
  .card-menu{
    width: 175px;
    height: 175px;
    margin: 0.5em;
  }
  .card-image{
    background-image: url('../../public/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png');
    background-size: cover;
    // background: po;
    height: 125px;
  }
  .card-content{
    padding: 0.2em 1em;
    font-size: 0.8em;
  }
  .display-menu{
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    min-height: 100%;
  }
  .no-order{
    margin: 1em auto;
    display: none;
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
  .image-order{
    width: 100px;
    height: 70px;
    background-image: url('../../public/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png');
    background-size: cover;
    background-position: center center;
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
  }
  .checkout{
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 20px;
    margin-top: 3em;
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
  .checkout1{
    background-color: #57CAD5;
    color: #ffffff;
  }
  .checkout2{
    background-color: #F24F8A;
    color: #ffffff;
  }
  .modal-card-head, .modal-card-foot, .modal-card-body{
    background-color: #ffffff;
    border: none;
    border-radius: 6px;
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
  .modal-item-button{
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
  }
  .button-item{
    width: 85px;
  }
  .field-label label{
    text-align: left;
  }
  .modal-item-header{
    font-size: 1.5em;
    margin-bottom: 30px;
  }
</style>
