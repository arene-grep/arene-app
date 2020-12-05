<template>
  <div>
    <h2>List of all products</h2>
    <!-- Rempli une liste de produits et l'affiche -->
      <div v-for="product in products" :key="product.id">
        Name: {{ product.name }}<br>
        Price: {{ product.price }}<br>
        Stock: {{ product.stock }}<br>
        Minimum stock: {{ product.minimum_stock }}<br>
        Category: {{ product.category_id }}<br>
        <router-link tag="button" :to="{name: 'getProductID', params:{id:product.id}}">Modifier</router-link>
        <button v-on:click="deleteProduct(product.id)">Supprimer</button><br><br>
      </div>
  </div>
</template>


<script>
import api from '../connection/api.js'

export default {
  data: () => {
    return {
      products:[]
    }
  },
  //récupère tous les produits et les met dans la liste products
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
            //permet de supprimer l'élément de la liste une fois qu'il a été supprimé de la BDD
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