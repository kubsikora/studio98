<template>
  <div class="window">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      arrows
      infinite
      style="width: 100%; height: 100%"
    >
      <q-carousel-slide
        v-for="(pic, index) in flatPics"
        :key="index"
        :name="index"
        :img-src="pic"
      />
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    pics: {
      type: Array as () => string[][],
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const slide = ref(0);
    slide.value = props.id;
    const close = () => {
      emit('close');
    };

    // Flatten the pics array to use in the carousel
    const flatPics = computed(() => props.pics.flat());

    return {
      close,
      slide,
      flatPics,
    };
  },
});
</script>

<style scoped>
.window {
  position: absolute;
  background: white;
  border-radius: 16px;
  height: 70%;
  width: 90%;
  max-width: 60%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
}
</style>
