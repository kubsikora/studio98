<template>
  <q-card class="card pc">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfO_EaDnjLF3kNGmof9szaCUt81xuD3MmiwR-u2Dzq8d0wJQw/viewform?embedded=true"
      width="100%"
      height="800"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Ładuję…</iframe
    >
  </q-card>
  <q-card class="card mobile">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfO_EaDnjLF3kNGmof9szaCUt81xuD3MmiwR-u2Dzq8d0wJQw/viewform?embedded=true"
      width="100%"
      height="510"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Ładuję…</iframe
    >
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style scoped>
.card {
  width: 100%;
  height: 809px;
}
.pc {
  display: block;
}
.mobile {
  display: none;
}
@media only screen and (max-width: 600px) {
  .pc {
    display: none;
  }
  .mobile {
    display: block;
  }
  .card {
    width: 100%;
    height: 510px;
  }
}
</style>
