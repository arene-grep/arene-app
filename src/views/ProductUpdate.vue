<template>
  <div class="home" v-show="this.product">
    <img alt="Vue logo" src="../assets/logo-arene.png">
    <FormUpdateProduct :my-product="this.product"></FormUpdateProduct>
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