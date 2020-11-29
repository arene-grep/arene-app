<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormUpdateProduct></FormUpdateProduct>
  </div>
</template>

<script>
import api from '../api.js'
import FormUpdateProduct from "@/components/FormUpdateProduct";
export default {
  name: "Product",
  components: {FormUpdateProduct: FormUpdateProduct},
  methods: {
    getProduct: function (id){
      api.getProduct(id)
    }
  },
  beforeMount() {
    console.log(this.getProduct(this.$route.params.id))
  }
}
</script>

<style scoped>

</style>