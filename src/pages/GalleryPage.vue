<template>
  <p
    class="text-h4 center q-pa-xl text-white prevent-select"
    style="margin-top: 70px; margin-bottom: -20px"
  >
    {{ $t('Menu.photos') }}
  </p>
  <div class="center pcgallery">
    <table>
      <tr v-for="(photos, index) in photoindexpc" :key="index">
        <td
          v-for="(photo, index2) in photos"
          :key="index2"
          class="photo-container"
        >
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
    <q-dialog v-model="dialog"
      ><gallery-popup :pics="photoindexpc" :id="choosen"
    /></q-dialog>
  </div>
  <div class="mobile">
    <table>
      <tr v-for="(photos, index) in photoindex" :key="index">
        <td
          v-for="(photo, index2) in photos"
          :key="index2"
          class="photo-container"
        >
          <q-img
            :src="photo"
            spinner-color="blue"
            class="q-mx-xs q-my-xs photo singleimage"
            @click="changeDialogmobile(index, index2)"
          />
        </td>
      </tr>
    </table>
    <q-dialog v-model="dialog"
      ><gallery-popup :pics="photoindex" :id="choosen"
    /></q-dialog>
  </div>
  <div class="background"></div>
  <foot-layout style="margin-top: 10px" />
</template>

<script lang="ts">
import { ref } from 'vue';
import GalleryPopup from './GalleryPopup.vue';
import FootLayout from 'src/layouts/FootLayout.vue';

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

    const changeDialogmobile = (index: number, index2: number) => {
      let slide = index * 3 + index2;
      choosen.value = slide;
      dialog.value = true;
    };

    const photoindexpc = [
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

    const photoindex = [
      [
        '/img/gallery/lower1.png',
        '/img/gallery/lower2.png',
        '/img/gallery/lower3.png',
      ],
      [
        '/img/gallery/pic4.png',
        '/img/gallery/pic5.png',
        '/img/gallery/pic6.png',
      ],
      [
        '/img/gallery/pic7.png',
        '/img/gallery/pic8.png',
        '/img/gallery/pic9.png',
      ],
      [
        '/img/gallery/pic10.png',
        '/img/gallery/pic11.png',
        '/img/gallery/pic12.png',
      ],
      [
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
      photoindexpc,
      changeDialogmobile,
    };
  },
};
</script>

<style scoped>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.down {
  height: 200px;
  background: #111312;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,20 C10,10 30,0 50,10 C70,20 90,5 100,10 L100,20 L0,20 Z" fill=\'%23111312\'/><path d="M0,20 C10,15 30,5 50,15 C70,25 90,10 100,15 L100,20 L0,20 Z" fill=\'%23525453\'/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.singleimage {
  height: 200px;
  max-width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.6);
}

tr {
  width: 80%;
}
.mobile {
  display: none;
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
@media only screen and (max-width: 600px) {
  .pcgallery {
    display: none;
  }
  .mobile {
    display: block;
    justify-content: center;
    align-items: center;
  }
  tr {
    width: 80%;
  }
  td {
    width: 210px;
    height: 110px;
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
  .singleimage {
    height: 120px;
    max-width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
}
</style>
