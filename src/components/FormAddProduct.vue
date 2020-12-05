<template>
  <div>
    <h2>Add a product</h2>
    <div>
      <form>
        <label for="name">Name</label>
        <br><input type="text" id="name" required /><br><br>
        <label for="price">Price</label>
        <br><input type="number" id="price" min="0" step="any" required /><br><br>
        <label for="stock">Stock</label>
        <br><input type="number" id="stock" min="0" required /><br><br>
        <label for="minimum_stock">Minimum stock</label>
        <br><input type="number" id="minimum_stock" min="0" required /><br><br>
        <label for="category">Category</label>
        <br><input type="number" id="category" min="0" required /><br><br>
        <button type="button" id="addProduct" @click="addProduct">Add</button><br>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/connection/api";

export default {
  data: () => ({
    product:{},
  }),
  methods:{
    addProduct: function (){
      this.product.name = document.getElementById("name").value;
      this.product.price = document.getElementById("price").value;
      this.product.stock = document.getElementById("stock").value;
      this.product.minimum_stock = document.getElementById("minimum_stock").value;
      this.product.category = document.getElementById("category").value;

      api.addProduct(this.product)
          .done((data)=> {
            window.location.pathname = '/products'
            console.log(data)
          })
    }
  },
};
</script>