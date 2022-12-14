<template>
  <div
    class="flex flex-col bg-emerald-200 absolute w-1/4 h-screen p-2"
    :class="{ hidden: saidbarState }">
    <div>
      <button @click="Hide">close</button>
    </div>
    <div v-for="link in links" class="flex flex-col">
      <NuxtLink :to="link.to" @click="Hide">{{ link.title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { saidbarState, Hide } = useHiddeSaidbar();
</script>

<script>
export default {
  data() {
    return {
      links: [
        { to: '/', title: 'Home' },
        { to: '/about', title: 'About' },
        { to: '/products', title: 'Products' },
      ],
    };
  },
};
</script>
