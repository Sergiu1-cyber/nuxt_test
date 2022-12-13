<template>
  <div 
    class="flex flex-col bg-emerald-200 absolute w-1/4 h-screen p-2" 
    :class="{hidden: saidbarState}">
    <div>
      <button @click="saidbarState = true">close</button>
    </div>
    <div class="flex flex-col">
      <NuxtLink to="/" @click="saidbarState = true">Home</NuxtLink>
      <NuxtLink to="/about" @click="saidbarState = true">About</NuxtLink>
      <NuxtLink to="/products" @click="saidbarState = true">Products</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const saidbarState = useHiddeSaidbar()
</script>
