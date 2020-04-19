import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

axios.defaults.headers.common.authorization = 'baca-bismillah';

export default new Vuex.Store({
  state: {
    url: process.env.VUE_APP_BASE_URL,
    page: 'product',
    products: null,
    selected: [],
  },
  mutations: {
    product(state, data) {
      state.products = data;
    },
    cancel(state) {
      state.selected = [];
    },
    add(state, data) {
      const items = state.selected.find((item) => item.id === data.id);
      if (!items) {
        state.selected.push(data);
      }
    },
    addQty(state, id, qty) {
      const items = state.selected.find((item) => item.id === id);
      if (items) {
        items.price *= qty;
      }
    },
  },
  getters: {
    addQty(state, id, qty) {
      const items = state.selected.find((item) => item.id === id);
      console.log(items);
      if (items) {
        items.price *= qty;
      }
    },
  },
  actions: {
    addQty(context, id, qty) {
      // const items = context.state.selected.find((item) => item.id === id);
      // if(items) {
      context.commit('addQty', id, qty);
      // } else{
      //   console.log('gagal');
      // }
    },
    addOrder(context, data) {
      context.commit('add', data);
    },
    cancelOrder(context) {
      context.commit('cancel');
    },
    getAllItems(context) {
      axios
        .get(context.state.url + context.state.page)
        .then((res) => {
          context.commit('product', res.data.products.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchItem(context, data) {
      const search = `product?search=${data}`;
      axios
        .get(context.state.url + search)
        .then((res) => {
          context.commit('product', res.data.products.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
  },
});
