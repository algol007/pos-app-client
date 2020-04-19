<template>
  <!-- Modal Receipt -->
  <div class="modal modal-email">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit="addItem" class="modal-card-body">
        <div class="modal-item-header">
          Email
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Product Name"
                v-model="product.name" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Image</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="file" ref="file" @change="upload"
                required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Price</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Product Price"
                v-model="product.price" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Category</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="product.categoryId " required>
                    <option value="1">Food</option>
                    <option value="2">Drink</option>
                    <option value="3">Desert</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-item-button">
          <button class="button button-item bg-pink" @click="cancel">Cancel</button>
          <button class="button button-item bg-blue">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped lang="scss">
</style>
