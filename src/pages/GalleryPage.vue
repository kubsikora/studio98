<template>
  <p
    class="text-h4 center q-pa-xl"
    style="margin-top: 70px; margin-bottom: -20px"
  >
    {{ $t('Menu.photos') }}
  </p>
  <div class="center">
    <table>
      <tr v-for="(photos, index) in photoindex" :key="index">
        <!-- Każdy rząd tabeli -->
        <td
          v-for="(photo, index2) in photos"
          :key="index2"
          class="photo-container"
        >
          <!-- Każda komórka w rzędzie -->
          <q-img
            :src="photo"
            spinner-color="blue"
            class="q-mx-xs q-my-xs photo"
            @click="changeDialog(index, index2)"
            style="
              height: 200px;
              max-width: 200px;
              border: 1px solid rgba(0, 0, 0, 0.6);
            "
          />
        </td>
      </tr>
    </table>
  </div>
  <q-dialog v-model="dialog"
    ><gallery-popup :pics="photoindex" :id="choosen"
  /></q-dialog>
  <div class="background"></div>
  <FootLayout style="z-index: -1; margin-top: 100px" />
</template>

<script lang="ts">
import { ref } from 'vue';
import GalleryPopup from './GalleryPopup.vue';
import FootLayout from '/src/layouts/FootLayout.vue';

export default {
  components: {
    GalleryPopup,
    FootLayout,
  },
  setup() {
    const dialog = ref(false);
    const choosen = ref<number>(1);

    const changeDialog = (index: number, index2: number) => {
      let slide = index * 5 + index2;
      choosen.value = slide;
      dialog.value = true;
    };

    const photoindex = [
      [
        '/img/gallery/lower1.png',
        '/img/gallery/lower2.png',
        '/img/gallery/lower3.png',
        '/img/gallery/pic4.png',
        '/img/gallery/pic5.png',
      ],
      [
        '/img/gallery/pic6.png',
        '/img/gallery/pic7.png',
        '/img/gallery/pic8.png',
        '/img/gallery/pic9.png',
        '/img/gallery/pic10.png',
      ],
      [
        '/img/gallery/pic11.png',
        '/img/gallery/pic12.png',
        '/img/gallery/pic13.png',
        '/img/gallery/pic14.png',
        '/img/gallery/pic15.png',
      ],
      [
        '/img/gallery/pic16.png',
        '/img/gallery/pic17.png',
        '/img/gallery/pic18.png',
      ],
    ];

    return {
      changeDialog,
      photoindex,
      dialog,
      choosen,
    };
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

tr {
  width: 80%;
}

td {
  width: 210px;
  height: 210px;
  position: relative;
}

.photo {
  transition: transform 0.3s ease;
  transform-origin: center center;
  will-change: transform;
}

.photo:hover {
  transform: scale(1.07);
}
</style>
