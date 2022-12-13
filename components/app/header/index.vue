<template>
  <div class="bg-emerald-400">
    <AppHeaderSaidebar />
    <button @click="saidbarState = false">@</button>
    <h1>Header</h1>
  </div>
</template>

<script setup>
  const saidbarState = useHiddeSaidbar()
</script>
