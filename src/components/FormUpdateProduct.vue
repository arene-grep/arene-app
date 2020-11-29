<template>
  <div>
    <h2>Update a product</h2>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
      <FormulateInput name="name" :value="formValuesUpdate.name" label="Name" validation="required" />
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
export default {
  data: () => ({
    formValues:{},
    formValuesUpdate:{}
  }),
  methods:{
    handleSubmit(){
      console.log(this.formValues)
      console.log(this.formValues.name)
    }
  },
  beforeMount() {
    this.formValuesUpdate={
      name:"test"
    }
  }
};
</script>