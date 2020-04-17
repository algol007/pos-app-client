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
  },
  mutations: {
    product(state, data) {
      state.products = data;
      console.log(state.products);
    },
  },
  actions: {
    getAllItems(context) {
    //   console.log(context.state.url);
    // },
      // context.state.page = 'product';
      axios
        .get(context.state.url + context.state.page)
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
