<template>
  <div class="home">
    <Navbar />
    <div class="columns is-gapless">
      <Sidebar @addItem="addItem" />
      <div class="column menu-lists">
        <div class="display-menu">
          <CardItem @select="select" />
        </div>
      </div>
      <OrderDetail/>
    </div>
    <AddItem />
    <Receipt />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
  methods: {
    ...mapActions('order', ['addOrders']),
    addItem() {
      const add = document.querySelector('.modal-item');
      add.classList.toggle('is-active');
    },
    select(data) {
      this.addOrders({ data, qty: 1 });
    },
  },
  mounted() {
    if (this.local.length === 0) {
      this.$router.push('/auth/login');
    }
  },
  computed: {
    ...mapState('user', ['local']),
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
