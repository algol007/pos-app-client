<template>
  <div class="column menu-panel">
    <router-link to="/">
      <div class="all-menu"><i class="fas fa-utensils"></i></div>
    </router-link>
    <router-link to="/history" v-if="this.user.role == 'admin'">
      <div class="income-history"><i class="fas fa-clipboard-list"></i></div>
    </router-link>
    <div class="add-menu" @click="$emit('addItem')" v-if="this.user.role == 'admin'">
      <i class="fas fa-plus"></i>
    </div>
    <div class="sign-out" @click="signout">
      <i class="fas fa-sign-out-alt"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Sidebar',
  methods: {
    ...mapActions('user', ['getUser', 'getLocalData', 'logout']),
    signout() {
      this.logout();
      this.$router.push('/auth/login');
    },
  },
  created() {
    this.getLocalData();
  },
  mounted() {
    this.getUser(this.local.user);
  },
  computed: {
    ...mapState('user', ['local', 'user']),
  },
};
</script>

<style scoped lang="scss">
  .menu-panel{
    z-index: 2;
    color: #ffffff;
    width: 60px;
    min-height: 100vh;
    position: fixed;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.25);
  }
  .menu-order{
    display: flex;
  }
  .menu-panel{
    margin-top: 60px !important;
  }
  .all-menu, .income-history, .add-menu, .sign-out{
    text-align: center;
    font-size: 30px;
    margin: 20px auto;
    color: #4a4a4a;
    cursor: pointer;
  }
</style>
