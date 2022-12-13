<template>
  <div>
    <h1>Products Page</h1>
    <div v-for="product in products">
      <NuxtLink :to="`product/${product.id}`">{{product.id}} - {{product.title}}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>