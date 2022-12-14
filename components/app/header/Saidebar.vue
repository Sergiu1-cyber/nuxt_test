<template>
  <div 
    class="flex flex-col bg-emerald-200 absolute w-1/4 h-screen p-2" 
    :class="{hidden: saidbarState}">
    <div>
      <button @click="Hide">close</button>
    </div>
    <div class="flex flex-col">
      <NuxtLink to="/" @click="Hide">Home</NuxtLink>
      <NuxtLink to="/about" @click="Hide">About</NuxtLink>
      <NuxtLink to="/products" @click="Hide">Products</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const {saidbarState, Hide} = useHiddeSaidbar()
</script>
