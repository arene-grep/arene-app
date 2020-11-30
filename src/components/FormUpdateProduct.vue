<template>
  <div>
    <h2>Update a product</h2>
    <div>
      <form>
        <!-- Permet de récupérer le produit choisi grâce au props "myProduct" -->
        <label for="name">Name</label>
        <br><input :value="myProduct.name" id="name" required /><br><br>
        <label for="price">Price</label>
        <br><input :value="myProduct.price" type="number" id="price" min="0" step="any" required /><br><br>
        <label for="stock">Stock</label>
        <br><input :value="myProduct.stock" type="number" id="stock" min="0" required /><br><br>
        <label for="minimum_stock">Minimum stock</label>
        <br><input :value="myProduct.minimum_stock" type="number" id="minimum_stock" min="0" required /><br><br>
        <button type="button" id="updateProduct" @click="updateProduct">Update</button><br>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/connection/api";
export default {
  data: () => ({
    product:{},
    idProduct:null
  }),
  props: {myProduct: Object},
  methods: {
    updateProduct() {
      this.product.name = document.getElementById("name").value;
      this.product.price = document.getElementById("price").value;
      this.product.stock = document.getElementById("stock").value;
      this.product.minimum_stock = document.getElementById("minimum_stock").value;

      api.updateProduct(this.idProduct, this.product)
          .done((data)=> {
            window.location.pathname = '/products'
        console.log(data)
      })
    },
  },
  beforeUpdate() {
    // obligé de récupérer le produit de cette manière sinon undefined
    this.idProduct= this.myProduct.id
  }
};
</script>