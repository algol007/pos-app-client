<template>
  <div class="login">
    <div class="title">
      <h1>Login Page</h1>
    </div>
    <div class="column is-6 is-login">
      <form @submit="login" class="card card-auth">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Login
            </button>
            <router-link to="/auth/register"><u>Not have account? Register</u></router-link>
          </p>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
  .login{
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 100px;
  }
  .title{
    text-align: center;
  }
  .card-auth{
    padding: 2em;
    border-radius: 6px;
  }
  .is-login{
    margin: 0 auto;
  }
  .control{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
