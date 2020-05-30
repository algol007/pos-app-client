import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    orders: [],
    history: [],
    histories: [],
  },
  mutations: {
    orders(state, data) {
      const items = state.orders.find((item) => item.data.id === data.data.id);
      if (!items) {
        state.orders.push(data);
      }
    },
    cancel(state) {
      state.orders = [];
    },
    add(state, data) {
      const items = state.orders.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty += 1;
      }
    },
    reduce(state, data) {
      const items = state.orders.find((item) => item.data.id === data.data.id);
      if (items) {
        if (items.qty > 1) {
          items.qty -= 1;
        }
      }
    },
    history(state, data) {
      state.histories = data;
      if (state.history.length < 10) {
        for (let i = 0; i < 10; i++) { // eslint-disable-line
          state.history.push(data[i]);
        }
      }
      console.log(state.history);
    },
  },
  actions: {
    addOrders(context, data) {
      context.commit('orders', data);
    },
    cancelOrder(context) {
      context.commit('cancel');
    },
    add(context, data) {
      context.commit('add', data);
    },
    reduce(context, data) {
      context.commit('reduce', data);
    },
    getAllHistories(context) {
      axios
        .get('http://localhost:5000/api/pos/order')
        .then((res) => {
          context.commit('history', res.data.orders.rows);
        });
    },
  },
});
