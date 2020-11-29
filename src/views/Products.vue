<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListProducts></ListProducts>
  </div>
</template>

<script>
import ListProducts from "@/components/ListProducts";
export default {
  name: "Products",
  components: {ListProducts}
}
</script>
