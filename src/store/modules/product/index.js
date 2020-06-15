import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    products: [],
    totalPage: 0,
  },
  mutations: {
    products(state, data) {
      state.products = data;
      // console.log(state.products);
    },
    pages(state, data) {
      state.totalPage = Math.ceil(data / 12);
      // console.log(state.totalPage);
    },
  },
  actions: {
    getAllProducts(context, { page, data }) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'product?page=' + page + data) // eslint-disable-line
        .then((res) => {
          context.commit('products', res.data.products.rows);
          context.commit('pages', res.data.products.count);
        });
    },
  },
});
