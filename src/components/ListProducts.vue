<template>
  <div>
    <h2>List of all products</h2>
      <div v-for="product in products" :key="product.id">
        name: {{ product.name }}, price: {{product.price}}
        <router-link tag="button" :to="{name: 'getProductID', params:{id:product.id}}">Modifier</router-link>
        <button v-on:click="deleteProduct(product.id)">Supprimer</button>
      </div>
  </div>
</template>


<script>
import api from '../api.js'

export default {
  data: () => {
    return {
      products:{}
    }
  },
  beforeMount() {
    api.getProducts()
        .done((data)=> {
          this.products = data
        })
        .fail(() => {
          console.log("ERROR")
        })
        .always(()=> {
          console.log("DONE OR FAIL DONT CARE")
        })
  },
  methods: {
    deleteProduct: function (id){
      api.deleteProduct(id)
          .done((data) => {
            console.log(data)
          })
    },
    getProduct: function(id){
      api.getProduct(id)
          .done((data)=> {
            console.log(data)
          })
    }
  },
};
</script>