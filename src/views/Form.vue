<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormAddProduct></FormAddProduct>
  </div>
</template>

<script>
// @ is an alias to /src
import FormAddProduct from '@/components/FormAddProduct.vue'

export default {
  name: 'Form',
  components: {
    FormAddProduct
  }
}
</script>