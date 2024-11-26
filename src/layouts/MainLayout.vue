<template>
  <BanerLayout />
  <router-view />
</template>

<script setup lang="ts">
import BanerLayout from './BanerLayout.vue';
</script>

<style scoped>
bg {
  background: blue;
  width: 100%;
  height: 100%;
}
</style>
