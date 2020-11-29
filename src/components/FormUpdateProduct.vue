<template>
  <div>
    <h2>Update a product</h2>
    <div>
      <input :value="myProduct.name"  name="name" label="Name" required @input="changeProduct(myProduct, 1)">
      <input :value="myProduct.price" type="number" name="price" label="Price" required @input="changeProduct(myProduct, 2)"/>
      <input :value="myProduct.stock" type="number" name="stock" label="Stock" required @input="changeProduct(myProduct, 3)"/>
      <input :value="myProduct.minimum_stock" type="number" name="minimum_stock" label="Minimum Stock" required @input="changeProduct(myProduct, 4)"/>
      <button type="submit" name="updateProduct" label="Add" @click="updateProduct">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    formValues: {},
    product:[]
  }),
  props: {myProduct: Object},
  methods: {
    updateProduct() {
      this.changeProduct()
    },
    changeProduct(item, key){
      var osef=Object.values(item)
      this.product[key]=osef[key]
      console.log(osef)
    }
  }
};
</script>