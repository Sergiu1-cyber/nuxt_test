<template>
  <div>
    <h1>About Page</h1>
    <h1>counter: {{counter}}</h1>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup>

  const {counter, increment} = useTest()
</script>
