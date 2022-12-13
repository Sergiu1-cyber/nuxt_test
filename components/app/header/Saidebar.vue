<template>
  <div 
    class="bg-emerald-200 absolute w-1/4 h-screen p-2" 
    :class="{hidden: saidbarState}">
    <div>
      <h1 @click="saidbarState = true">close</h1>
    </div>
  </div>
</template>

<script setup>
  const saidbarState = useHiddeSaidbar()
</script>
