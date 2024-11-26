<template>
  <p class="text-h4 b center q-pa-xl" style="margin-top: 90px">
    {{ $t('welcome') }}
  </p>
  <q-btn
    round
    flat
    class="carnavigation abs-l"
    icon="arrow_back_ios"
    @click="previousSlide"
  />
  <q-btn
    round
    flat
    class="carnavigation abs-r"
    icon="arrow_forward_ios"
    @click="nextSlide"
  />
  <q-carousel
    :autoplay="10000"
    animated
    v-model="slide"
    navigation
    infinite
    ref="carousel"
    class="carousel"
    control-color="white"
    transition-prev="slide-right"
    transition-next="slide-left"
  >
    <q-carousel-slide :name="1">
      <q-img class="car-pics" src="/img/mainfoto.png" />
    </q-carousel-slide>
    <q-carousel-slide :name="2">
      <q-img class="car-pics" src="/img/pergol1.png" />
    </q-carousel-slide>
    <q-carousel-slide :name="3">
      <q-img class="car-pics" src="/img/pergol2.png" />
    </q-carousel-slide>
    <q-carousel-slide :name="4">
      <q-img class="car-pics" src="/img/pergol3.png" />
    </q-carousel-slide>
  </q-carousel>
  <CountryTemplate :text="'FirstSen'" class="gradientbig" />
  <div class="bg">
    <div v-for="(card, index) in cardindex" :key="index">
      <CardTamplate
        :text="card.text"
        :align="card.align"
        :color="card.color"
        :picurl="card.picurl"
      />
    </div>
    <FootLayout />
  </div>
</template>

<script lang="ts">
import CardTamplate from '../template/CardTemplate.vue';
import CountryTemplate from '../template/CountryTemplate.vue';
import FootLayout from '/src/layouts/FootLayout.vue';
import { ref } from 'vue';

export default {
  components: {
    FootLayout,
    CardTamplate,
    CountryTemplate,
  },
  setup() {
    const slide = ref<number>(1);

    const cardindex = [
      {
        text: 'Lower.t1',
        align: true,
        color: 'rgb(0, 180, 216)',
        picurl: '/img/gallery/lower1.png',
      },
      {
        text: 'Lower.t2',
        align: false,
        color: 'rgb(0, 119, 182)',
        picurl: '/img/gallery/lower2.png',
      },
      {
        text: 'Lower.t3',
        align: true,
        color: 'rgb(3, 4, 94)',
        picurl: '/img/gallery/lower3.png',
      },
    ];

    const previousSlide = () => {
      if (slide.value == 1) {
        slide.value = 4;
      } else {
        slide.value = slide.value - 1;
      }
    };

    const nextSlide = () => {
      if (slide.value == 4) {
        slide.value = 1;
      } else {
        slide.value = slide.value + 1;
      }
    };
    return {
      slide,
      previousSlide,
      nextSlide,
      CardTamplate,
      cardindex,
    };
  },
};
</script>
slide = ref(1);
<style scoped>
.bg {
  margin-top: -50px;
  background: rgb(229, 227, 246);
}
.gradientbig {
  margin-top: 150px;
  background: rgb(164, 164, 164);
  background: linear-gradient(
    0deg,
    rgb(229, 227, 246) 8%,
    rgba(255, 255, 255, 1) 84%
  );
}

.b {
  font-weight: 400;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel {
  height: 400px;
}
.car-pics {
  margin-left: 10%;
  height: 360px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}
.card {
  width: 30%;
}
.carnavigation {
  width: 20px;
  height: 20px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 170px;
}
.abs-l {
  position: absolute;
  left: 0;
  z-index: 1;
}
.abs-r {
  position: absolute;
  right: 0;
  z-index: 1;
}
</style>
