<template>
  <div class="register">
    <div class="title">
      <h1>Register</h1>
    </div>
    <div class="column is-6 is-login">
      <form @submit="register" class="card card-auth">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Fullname" v-model="user.name"
            required>
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
            <input class="input" type="email" placeholder="Email" v-model="user.email"
            required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password"
            required>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        <span class="error-message" v-if="this.message1.length">{{ this.message1 }}</span>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Repeat Password"
            v-model="password2" required>
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        <span class="error-message" v-if="this.message2.length">{{ this.message2 }}</span>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Register
            </button>
            <router-link to="/auth/login"><u>Have an account? Login</u></router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: null,
        email: null,
      },
      password: null,
      password2: null,
      message1: [],
      message2: [],
      url: process.env.VUE_APP_BASE_URL,
      page: null,
    };
  },
  watch: {
    password(value) {
      this.password = value;
      console.log(value);
      this.checkPassword(value);
    },
    password2(value) {
      this.password2 = value;
      this.checkPassword2(value);
    },
  },
  methods: {
    checkPassword(value) {
      if (value.length < 4) {
        this.message1 = 'Password must contains at least 4 characters';
      } else {
        this.message1 = '';
      }
    },
    checkPassword2(value) {
      if (value.length < 4) {
        this.message2 = 'Password must contains at least 4 characters';
      } else {
        this.message2 = '';
      }
    },
    register(event) {
      this.page = 'auth/signup';
      event.preventDefault();
      if (this.user.password !== this.user.password2) {
        this.$swal.fire({
          icon: 'error',
          html: 'Password not match!',
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        axios
          .post(this.url + this.page, {
            name: this.user.name,
            email: this.user.email,
            password: this.password,
          })
          .then((res) => {
            this.$swal.fire({
              icon: 'success',
              title: 'Your account has been created.',
              text: 'Please check your email to activate!',
              footer: "<a href='https://gmail.com/'>Check my email..</a>",
            });
            console.log(res);
            this.$router.push('/auth/login');
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
  .error-message{
    color: rgb(250, 0, 0);
    font-size: 14px;
    padding-left: 10px;
  }
</style>
