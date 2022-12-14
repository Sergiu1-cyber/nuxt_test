<template>
  <AppHeaderSaidebar />
  <div class="bg-emerald-400 flex py-3">
    <button 
      class="ml-5"
      @click="saidbarState = false">@</button>
    <h1 class="ml-4">Header</h1>
  </div>
</template>

<script setup>
  const saidbarState = useHiddeSaidbar()
</script>
