<template>
  <div>
    <h1>Products Page</h1>
    <div v-if="!product">
      <AppGeneralLoader />
    </div> 
    <div v-if="product">
      <h1>{{product.id}}</h1>
      <h1>{{product.title}}</h1>
      <img :src="product.image" alt="img">
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const {data: product} = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`)
</script>
