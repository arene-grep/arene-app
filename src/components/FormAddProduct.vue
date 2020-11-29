<template>
  <div>
    <h2>Add a product</h2>
    <FormulateForm v-model="formValues" @submit="addProduct">
      <FormulateInput name="name" label="Name" validation="required" />
      <FormulateInput type="number" name="price" label="Price" validation="required" />
      <FormulateInput type="number" name="stock" label="Stock" validation="required" />
      <FormulateInput type="number" name="minimum_stock" label="Minimum Stock" validation="required" />
      <FormulateInput type="submit" name="addProduct" label="Add" />
    </FormulateForm>
    <h3>Values:</h3>
    {{formValues}}
  </div>
</template>

<script>
import api from "@/api";

export default {
  data: () => ({
    formValues:{},
    formValuesUpdate:{}
  }),
  methods:{
    addProduct: function (){
      api.addProduct(this.formValues)
          .done((data)=> {
            console.log(data)
          })
    }
  },
};
</script>