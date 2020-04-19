<template>
  <div class="home">
    <Navbar />
    <div class="columns is-gapless">
      <Sidebar @add="addItem" />
      <div class="column menu-lists">
        <div class="display-menu">
          <CardItem @select="select" />
        </div>
      </div>
      <OrderDetail @cancelOrder="cancelOrder" />
    </div>
    <AddItem />
    <Receipt />
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import CardItem from '../components/CardItem.vue';
import AddItem from '../components/AddItem.vue';
import Receipt from '../components/Receipt.vue';
import OrderDetail from '../components/OrderDetail.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    CardItem,
    AddItem,
    Receipt,
    OrderDetail,
  },
  data() {
    return {
      page: null,
      url: process.env.VUE_APP_BASE_URL,
      qty: 1,
      total: 10000,
      image: null,
      // selected: null,
    };
  },
  created() {

  },
  methods: {
    reduceQty() {
      this.qty -= 1;
    },
    addQty() {
      this.qty += 1;
    },
    addItem() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
    },
    select(data) {
      return this.$store.dispatch('addOrder', { data, qty: 1 });
    },
    cancelOrder() {
      this.$store.dispatch('cancelOrder');
    },
  },
  mounted() {
    this.$store.dispatch('getAllItems');
    // console.log(this.orderItem);
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
    min-height: 100vh;
  }
  @media screen and (max-width: 768px){
    .modal-item{
      padding: 0 20px;
    }
    .display-menu{
      height: 740px;
      overflow-y: scroll;
    }
  }
</style>
