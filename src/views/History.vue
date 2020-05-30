<template>
  <div class="home">
    <Navbar2 title="History" />
    <div class="columns is-gapless">
      <Sidebar @addItem="addItem" />
      <div class="column menu-lists">
        <div class="display-menu">
          <div class="card-info">
            <div class="card card-history bg-pink">
              <div class="card-content">
                <div class="content">
                  <div class="today-title">
                    Today's Income
                  </div>
                  <div class="today-income">
                    Rp. {{ incomes }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-history bg-blue">
              <div class="card-content">
                <div class="content">
                  <div class="today-title">
                    Orders
                  </div>
                  <div class="today-income">
                    {{ histories.length }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-history bg-purple">
              <div class="card-content">
                <div class="content">
                  <div class="today-title">
                    This Year's Income
                  </div>
                  <div class="today-income">
                    Rp. {{ revenues }}
                  </div>
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
                  <area-chart :data="chartData"></area-chart>
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
                <div class="content table-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>INVOICES</th>
                        <th>CASHIER</th>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="order in history" :key="order.id">
                        <td>{{ order.invoice }}</td>
                        <td>{{ order.userOrder.name }}</td>
                        <td>{{ order.createdAt.slice(0, 10) }}</td>
                        <td>Rp. {{ order.total }}</td>
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Navbar2 from '../components/Navbar2.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Navbar2,
    Sidebar,
  },
  data() {
    return {
      chartData: {
        '2020-04-12': 2,
        '2020-04-13': 5,
        '2020-04-14': 3,
        '2020-04-15': 9,
        '2020-04-16': 9,
        '2020-04-17': 8,
        '2020-04-18': 7,
      },
      incomes: 0,
      revenues: 0,
    };
  },
  methods: {
    ...mapActions('order', ['getAllHistories']),
    receipt() {
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
    addItem() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
    },
    totalOrder() {
      this.totalOrders = this.orders.length;
    },
    income() {
      const income = [];
      for (let i = 0; i < this.history.length; i += 1) {
        income.push(this.history[i].total);
      }
      this.incomes = income.reduce((a, b) => a + b);
    },
    revenue() {
      const revenue = [];
      for (let i = 0; i < this.histories.length; i += 1) {
        revenue.push(this.histories[i].total);
      }
      this.revenues = revenue.reduce((a, b) => a + b);
    },
  },
  mounted() {
    if (this.local.length === 0) {
      this.$router.push('/auth/login');
    }
    this.getAllHistories();
  },
  updated() {
    this.income();
    this.revenue();
  },
  computed: {
    ...mapState('user', ['local']),
    ...mapState('order', ['history', 'histories']),
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
    padding: 76px 1em 1em;
    height: 100vh;
    overflow-y: scroll;
  }
  .show{
    transition: 1s;
    display: block !important;
  }
  .columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
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
    justify-content: center;
    width: 100%;
  }
  .card-history{
    margin: 0 10px;
    border-radius: 6px;
    width: 33%;
    height: 180px;
  }
  .card-info .card-content{
    color: #363636;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .card-info .card-content .today-income{
    font-size: 1.5em;
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
  @media screen and (max-width: 768px){
    .card-info{
      flex-direction: column;
      margin: 0 auto;
    }
    .card-history{
      margin-top: 10px;
      width: 95%;
    }
  }
</style>
