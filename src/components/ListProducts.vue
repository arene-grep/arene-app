<template>
  <div>
    <h2>List of all products</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        name: {{ product.name }}, price: {{product.price}}
        <router-link tag="button" :to="{name: 'getProductID', params:{id:product.id}}">Modifier</router-link>
        <button v-on:click="deleteProduct(product)">Supprimer</button>
      </li>
    </ul>
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
          console.log(this.products)
        })
        .fail(() => {
          console.log("ERROR")
        })
        .always(()=> {
          console.log("DONE OR FAIL DONT CARE")
        })
  },
  methods: {
    deleteProduct: function (product){
      console.log("Delete", product.name )
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