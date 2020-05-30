import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
    local: [],
    user: [],
  },
  mutations: {
    local(state, data) {
      state.local = data;
      // console.log(data);
    },
    user(state, data) {
      state.user = data;
      // console.log(state.user);
    },
    logout(state) {
      state.local = [];
      state.user = [];
    },
  },
  actions: {
    getLocalData(context) {
      const data = JSON.parse(localStorage.getItem('items'));
      context.commit('local', data);
    },
    getUser(context, id) {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user/' + id) // eslint-disable-line
        .then((res) => {
          context.commit('user', res.data.user);
        });
    },
    logout(context) {
      context.commit('logout');
    },
  },
});
