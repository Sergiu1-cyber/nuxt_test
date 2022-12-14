<template>
  <AppHeader />
  <div 
    class="h-screen"
    @click="Hide">
      <slot />
  </div>
</template>

<script setup>
  const {Hide} = useHiddeSaidbar()
</script>

