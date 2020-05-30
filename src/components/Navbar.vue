<template>
  <div class=" navbar columns is-gapless">
    <div class="column panels">
      <i class="fas fa-bars"></i>
    </div>
    <div class="column lists">
      <div class="title-page">
        Food Items
      </div>
      <div class="search">
        <div class="search-icon" @click="isSearch">
          <i class="fas fa-search"></i>
        </div>
        <div class="search-item">
          <input type="text" class="search-input" v-model="search" @input="searchMenu">
        </div>
      </div>
    </div>
    <div class="column is-4 order">
      Cart <sup class="cart-total">{{ orders.length }}</sup>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      search: null,
      total: 8,
    };
  },
  update() {
    this.cart();
  },
  methods: {
    ...mapActions('product', ['getAllProducts']),
    cart() {
      this.total = this.$store.state.selected.length;
      console.log(this.total);
    },
    isSearch() {
      const title = document.querySelector('.title-page');
      const search = document.querySelector('.search');
      const input = document.querySelector('.search-input');
      const item = document.querySelector('.search-item');
      item.classList.toggle('search-width');
      title.classList.toggle('hide');
      search.classList.toggle('search-width');
      input.classList.toggle('show');
    },
    searchMenu() {
      console.log(this.search);
      this.getAllProducts({ page: 1, data: `&search=${this.search}` });
    },
  },
  computed: {
    ...mapState('order', ['orders']),
  },
};
</script>

<style lang="scss" scoped>
  .search-width{
    width: 90% !important;
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
  .lists{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-page{
    width: 90%;
  }
  .search-icon{
    margin-right: 1em;
    cursor: pointer;
  }
  .search{
    width: 10%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .search-item input{
    width: 85%;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid #696969;
    display: none;
  }
  .order{
    border-left: 1px solid #696969;
  }
  .cart-total{
    background-color: #e0e0e0;
    border-radius: 50%;
    padding: 5px 10px;
  }
  @media screen and (max-width: 768px){
    .navbar{
      flex-wrap: nowrap;
      flex-direction: row;
      display: flex;
    }
    .order{
      display: none;
    }
  }
</style>
