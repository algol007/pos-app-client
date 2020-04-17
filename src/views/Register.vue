<template>
  <div class="register">
    <div class="title">
      <h1>Register</h1>
    </div>
    <div class="column is-6 is-login">
      <form @submit="register" class="card card-auth">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Fullname">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <!-- <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span> -->
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
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
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Repeat Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Register
            </button>
            <router-link to="/auth/register"><u>Have an account? Login</u></router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    register() {
      this.$router.push('/auth/login');
    },
  },
};
</script>

<style scoped lang="scss">
  .register{
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
