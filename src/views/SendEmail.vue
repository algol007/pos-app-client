<template>
  <div class="login">
    <div class="title">
      <h1>Send Receipt to Email</h1>
    </div>
    <div class="column is-6 is-login">
      <form @submit="sendEmail" class="card card-auth">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Costumer Name" v-model="costumer.name"
            required>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Costumer Email" v-model="costumer.email"
            required>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="file" ref="file"
            required>
            <span class="icon is-small is-left">
              <i class="fas fa-file"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">
              Send Email
            </button>
            <router-link to="/"><u>Back to Menu</u></router-link>
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
      costumer: {
        email: null,
        password: null,
      },
      items: [],
    };
  },
  created() {
    this.items = JSON.parse(localStorage.getItem('items'));
  },
  methods: {
    sendEmail(event) {
      event.preventDefault();
      this.page = 'costumer';
      axios
        .post(this.url + this.page, {
          name: this.costumer.name,
          email: this.costumer.email,
        },
        { headers: { 'baca-bismillah': this.items.token } })
        .then(() => {
          this.$swal.fire({
            icon: 'success',
            html: 'Email has been sent!',
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
