<template>
  <div class="login">
    <div class="title">
      <h1>Login Page</h1>
    </div>
    <div class="column is-6 is-login">
      <form @submit="login" class="card card-auth">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="user.email"
            required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="user.password"
            required>
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
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      page: null,
      user: {
        email: null,
        password: null,
      },
      local: {
        id: null,
        token: null,
      },
    };
  },
  created() {
    // eslint-disable-next-line
    const token = this.$route.query.token;
    // console.log(token);
    if (token) {
      this.local.token = token;
      this.userActivation();
    }
  },
  methods: {
    localData() {
      const parsed = JSON.stringify({
        isLogin: true,
        id: this.local.id,
        token: this.local.token,
      });
      localStorage.setItem('items', parsed);
    },
    userActivation() {
      this.page = 'user/activation?token=';
      axios.patch(this.url + this.page + this.local.token, {
        status: 1,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    login(event) {
      event.preventDefault();
      this.page = 'auth/signin';
      axios
        .post(this.url + this.page, {
          email: this.user.email,
          password: this.user.password,
        })
        .then((res) => {
          // console.log(res.data);
          this.local.id = res.data.user;
          this.local.token = res.data.token;
          this.localData();
          this.$swal.fire({
            icon: 'success',
            html: 'Login Successfully!',
            showConfirmButton: false,
            timer: 3000,
          });
          this.$router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
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
    background: rgba(190, 195, 202, 0.3);
    min-height: 100vh;
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
