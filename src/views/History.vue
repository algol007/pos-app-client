<template>
  <div class="home">
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
          <div class="card-info">
            <div class="card card-history bg-pink">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
            <div class="card card-history bg-blue">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
            <div class="card card-history bg-purple">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div class="card-chart">
            <div class="card charts">
              <div class="card-content">
                <div class="card-title">
                  Revenue
                </div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                  <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div class="card-recent-order">
            <div class="card recent-order">
              <div class="card-content">
                <div class="card-title">
                  Recent Order
                </div>
                <div class="content">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>INVOICES</th>
                        <th>CASHIER</th>
                        <th>DATE</th>
                        <th>ORDERS</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                        <td>3</td>
                        <td>68</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>23</td>
                        <td>12</td>
                        <td>3</td>
                        <td>68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      // const check = document.querySelector('.card-overlay');
      // check.classList.toggle('show');
      console.log('hello');
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
  .display-menu{
    padding: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    min-height: 100vh;
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
  .card-info{
    display: flex;
  }
  .card-history{
    margin: 0 10px;
    border-radius: 6px;
  }
  .card-chart, .card-recent-order{
    width: 100%;
    padding: 10px;
    margin-top: 2em;
  }
  .charts, .recent-order{
    border-radius: 6px;
  }
  .card-title{
    font-size: 1.2em;
    margin-bottom: 30px;
  }
  .recent-order{
    margin-bottom: 2em;
  }
  .bg-blue{
    background-image: linear-gradient(285.38deg, #29DFFF 30.05%, rgba(241, 201, 236, 0) 133.19%);
  }
  .bg-purple{
    background-image: linear-gradient(285.38deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
  }
  .bg-pink{
    background-image: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
  }
</style>
