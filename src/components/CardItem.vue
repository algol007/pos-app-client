<template>
  <div class="item">
    <div class="card card-item" v-for="item in products" :key="item.id"
    @click="$emit('select', item)">
      <div class="card-overlay"><i class="far fa-check-circle"></i></div>
      <div class="card-image">
        <img :src="item.image" :alt="item.image">
      </div>
      <div class="card-content">
        <div class="media-content">
          <p>{{ item.name }}</p>
          <p><strong>Rp. {{ item.price }}</strong></p>
        </div>
      </div>
    </div>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <div class="pagination-previous" @click="prev">Previous</div>
      <div class="pagination-next" @click="next">Next page</div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    ...mapActions('product', ['getAllProducts']),
    next() {
      if (this.page < this.totalPage) {
        this.page += 1;
      } else {
        this.page = this.totalPage;
      }
      this.getAllProducts({ page: this.page, data: '' });
    },
    prev() {
      if (this.page > 2) {
        this.page -= 1;
      } else {
        this.page = 1;
      }
      this.getAllProducts({ page: this.page, data: '' });
    },
  },
  mounted() {
    this.getAllProducts({ page: this.page, data: '' });
  },
  computed: {
    ...mapState('product', ['products', 'totalPage']),
  },
};
</script>

<style scoped lang="scss">
  .item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card-overlay{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    position: absolute;
    z-index: 2;
    color: #ffffff;
    font-size: 4em;
    text-align: center;
    padding: 30px 0;
    display: none;
  }
  .card-item{
    width: 220px;
    height: 245px;
    margin: 0.5em;
    border-radius: 6px;
  }
  .card-image img{
    height: 150px;
    width: 180px;
  }
  .card-content{
    padding: 0.2em 1em;
    font-size: 0.8em;
  }
  .pagination{
    width: 100%;
    display: block;
    margin: 1em;
  }
</style>
