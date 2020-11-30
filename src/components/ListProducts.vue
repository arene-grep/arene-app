<template>
  <div>
    <h2>List of all products</h2>
      <div v-for="product in products" :key="product.id">
        name: {{ product.name }}<br>
        price: {{ product.price }}<br>
        stock: {{ product.stock }}<br>
        minimum_stock: {{ product.stock }}<br>
        <router-link tag="button" :to="{name: 'getProductID', params:{id:product.id}}">Modifier</router-link>
        <button v-on:click="deleteProduct(product.id)">Supprimer</button><br><br>
      </div>
  </div>
</template>


<script>
import api from '../api.js'

export default {
  data: () => {
    return {
      products:[]
    }
  },
  beforeMount() {
    api.getProducts()
        .done((data)=> {
          this.products = data
        })
        .fail(() => {
        })
        .always(()=> {
        })
  },
  methods: {
    deleteProduct: function (id){
      api.deleteProduct(id)
          .done((data) => {
            var index = this.products.map(function(item) {
              return item.Id
            }).indexOf(id);
            this.products.splice(index, 1);
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