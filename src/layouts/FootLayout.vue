<template>
  <q-bar class="bar"> </q-bar>
</template>

<script setup lang="ts"></script>

<style scoped>
.bar {
  margin-top: 80px;
  height: 120px;
  background: #ffffff8c;
}

.background {
  position: relative;
  background: #cbcfd2;
  height: 00px;
  margin-top: 50px;
}

.background::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 0 C25 10, 75 0, 100 10 L100 10 L0 10 Z" fill="%23cbcfd2"/></svg>');
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  margin-bottom: 00px;
}

.custom-icon {
  transform: translate(50%, -50%);
  z-index: 1;
}
</style>
