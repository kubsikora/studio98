<template>
  <div class="card-section-conteiner q-my-lg" :style="{ width: x }">
    <q-card
      class="my-card text-white card"
      :style="{ background: color, height: y }"
    >
      <q-card-section v-if="align" class="abs-r">
        <p class="text-h5 center q-py-xl q-px-md">
          {{ $t(text) }}
        </p>
      </q-card-section>
      <div v-else class="abs-r" style="height: 100%; width: 49%">
        <q-img class="img abs-r" :src="picurl" />
      </div>
      <q-card-section v-if="align" class="abs-l contenerimg">
        <q-img class="img abs-r" :src="picurl" />
      </q-card-section>
      <q-card-section v-else class="abs-l">
        <p class="text-h5 center q-py-xl q-px-md">
          {{ $t(text) }}
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    align: {
      type: Boolean,
      required: true,
    },
    picurl: {
      type: String,
      required: true,
    },
    y: {
      type: String,
      default: '300px',
    },
    x: {
      type: String,
      default: '60%',
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.card-section-conteiner {
  margin-left: 20%;
  padding-bottom: 20px;
  width: 60%;
}
.abs-l {
  position: absolute;
  left: 0;
  z-index: 1;
  width: 50%;
}
.abs-r {
  position: absolute;
  right: 0;
  z-index: 1;
  width: 50%;
}
.my-card {
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
}
.contenerimg {
  height: 100%;
  width: 49%;
  position: relative;
}

.img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
