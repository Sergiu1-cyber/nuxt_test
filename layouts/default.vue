<template>
  <AppHeader />
  <div 
    class="h-screen"
    @click="saidbarState = true">
      <slot />
  </div>
</template>

<script setup>
  const saidbarState = useHiddeSaidbar()
</script>

