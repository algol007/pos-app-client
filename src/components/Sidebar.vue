<template>
  <div class="column menu-panel">
    <router-link to="/"><div class="all-menu"></div></router-link>
    <router-link to="/history"><div class="income-history"></div></router-link>
    <div class="add-menu" @click="$emit('add')">
      <i class="fas fa-plus"></i>
    </div>
    <div class="sign-out" @click="signOut">
      <i class="fas fa-sign-out-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    signOut() {
      localStorage.removeItem('items');
      this.$router.push('auth/login');
    },
  },
};
</script>

<style scoped lang="scss">
  .menu-panel{
    z-index: 2;
    color: #ffffff;
    width: 60px;
    height: 100vh;
    position: fixed;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.25);
  }
  .menu-order{
    display: flex;
  }
  .menu-panel{
    margin-top: 60px !important;
  }
  .all-menu{
    background-image: url('../../public/img/fork.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 35px;
    height: 35px;
    margin: 30px auto;
  }
  .income-history{
    background-image: url('../../public/img/clipboard.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40px;
    height: 40px;
    margin: 30px auto;
  }
  .add-menu, .sign-out{
    text-align: center;
    font-size: 30px;
    margin: 20px auto;
    color: #4a4a4a;
  }
</style>
