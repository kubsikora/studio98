<template>
  <div class="container">
    <div align="left" class="card">
      <q-img
        class="img"
        :src="pic"
        style="object-fit: contain; width: 70%; height: auto; margin-top: -60px"
      />
    </div>
    <div align="left" class="card" style="margin-right: 100px">
      <div class="innercard">
        <p class="text-h5 center q-pb-xl q-px-xl" style="margin-top: -120px">
          {{ $t(text) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  components: {},
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    const pic = ref<string>('/img/country.png');
    const pic2 = ref<string>('/img/country2.png'); // Drugi obrazek
    return { pic, pic2 };
  },
};
</script>

<style scoped>
.container {
  margin-top: 80px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* background: rgb(164, 164, 164);
  background: linear-gradient(
    0deg,
    rgb(206, 206, 206) 8%,
    rgba(255, 255, 255, 1) 84%
  ); */
}

.card {
  width: 45%;
  height: 500px;
}

.img {
  margin-left: 20%;
  overflow: auto;
}

.innercard {
  margin-top: 200px;
  margin-right: 20%;
  color: rgba(0, 0, 0, 0.8);
}
</style>
