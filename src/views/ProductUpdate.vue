<template>
  <div class="home" v-show="this.product">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormUpdateProduct :my-product="this.product"></FormUpdateProduct>
    <div v-show="this.product">
      {{this.product.price}}
    </div>
  </div>
</template>

<script>
import api from '../api.js'
import FormUpdateProduct from "@/components/FormUpdateProduct";
export default {
  name: "ProductUpdate",
  components: {FormUpdateProduct: FormUpdateProduct},
  data: () => {
    return {
      product:{},
    }
  },
  beforeMount() {
    api.getProduct(this.$route.params.id)
    .done((data)=>{
      this.product = data
    })
  }
}
</script>