<template>
  <q-img src="/img/logo.png" alt="logo" :size="200" class="logo q-mr-md" />
  <p class="text-h4 b center q-pa-xl text-white">
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

  <div class="gradientbig" />
  <div class="divdown">
    <table class="table">
      <tbody>
        <tr>
          <td rowspan="3" style="width: 400px">
            <div class="left-panel"></div>
          </td>
          <td colspan="2">
            <div class="top-panel">
              <q-img
                src="img/gallery/lower1.png"
                style="
                  max-height: 80%;
                  max-width: 50%;
                  margin-top: 5%;
                  border-radius: 16px;
                "
              />
            </div>
          </td>
          <td>
            <div class="top-right-panel"></div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="middle-left-panel"></div>
          </td>
          <td colspan="1">
            <div class="middle-right-panel"></div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="bottom-panel"></div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mobiletable">
      <div class="left-panel"></div>
      <div class="middle-right-panel"></div>
      <div class="top-right-panel"></div>
    </div>

    <!-- <div class="left1">
      <div style="width: 80%; height: 600px; margin-left: 20%">
        <div
          style="
            width: 50%;
            background-color: white;
            height: 100%;
            border-radius: 32px;
          "
        ></div>
        <div
          style="
            width: 50%;
            background-color: white;
            height: 30%;
            border-radius: 32px;
          "
        ></div>
      </div>
    </div>
    <div class="right2">
      <div style="background-color: white; width: 80%; height: 400px"></div>
    </div> -->
  </div>
  <br />
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  components: {},
  setup() {
    const slide = ref<number>(1);

    const cardindex = [
      {
        text: 'Lower.t1',
        align: true,
        color: 'rgb(160,160,160)',
        picurl: '/img/gallery/lower1.png',
      },
      {
        text: 'Lower.t2',
        align: false,
        color: 'rgb(129,129,129)',
        picurl: '/img/gallery/lower2.png',
      },
      {
        text: 'Lower.t3',
        align: true,
        color: 'rgb(89,89,89)',
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
    const isVisible = ref(false);
    const animatedDiv = ref<HTMLElement | null>(null);

    const handleScroll = () => {
      if (!animatedDiv.value) return;
      const rect = animatedDiv.value.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        isVisible.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    return {
      isVisible,
      slide,
      previousSlide,
      nextSlide,
      cardindex,
    };
  },
};
</script>
slide = ref(1);
<style scoped>
.left-panel {
  width: 100%;
  height: 700px;
}

.top-panel {
  width: 100%;
  height: 300px;
  margin-bottom: -100px;
  margin-top: -120px;
}

.top-right-panel {
  width: 100%;
  height: 300px;
}

.middle-right-panel {
  width: 150%;
  height: 300px;
  margin-bottom: 120px;
  margin-top: 0;
}
.middle-left-panel {
  width: 100%;
  height: 300px;
  margin-bottom: 120px;
  margin-top: 0;
}

.bottom-panel {
  width: 100%;
  height: 300px;
  margin-bottom: -100px;
  margin-top: -120px;
}

.bottom-panel,
.middle-left-panel,
.middle-right-panel,
.top-right-panel,
.top-panel,
.left-panel {
  background-color: #3b3d3c;
  border: 1px solid #3b3d3c;
  border-radius: 32px;
  transition: background-color 0.9s ease;
  transition: transform 0.5s ease;
  padding: 20px;
}
.bottom-panel:hover,
.middle-left-panel:hover,
.middle-right-panel:hover,
.top-right-panel:hover,
.top-panel:hover,
.left-panel:hover {
  background-color: #424342;
  transform: scale(1.03);
}
.hidden {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
td {
  padding: 10px;
}
.visible {
  opacity: 1;
  transform: translateX(0);
}
.bg {
  margin-top: -50px;
  background: #111312;
}
.gradientbig {
  height: 200px;
  background: #111312;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,20 C10,10 30,0 50,10 C70,20 90,5 100,10 L100,20 L0,20 Z" fill=\'%23111312\'/><path d="M0,20 C10,15 30,5 50,15 C70,25 90,10 100,15 L100,20 L0,20 Z" fill=\'%23525453\'/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
}

.divdown {
  background-color: #525453;
  height: 1100px;
  padding-top: 100px;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
}
.left1,
.right2 {
  width: 50%;
  margin-top: 100px;
  display: flex;
}

.b {
  font-weight: 400;
}
.table {
  width: 100%;
  border-collapse: collapse;
  height: 800px;
}
.mobiletable,
.logo {
  display: none;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
}
.carousel {
  background-color: #111312;
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
  color: white;
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
@media only screen and (max-width: 600px) {
  .carousel {
    background-color: #111312;
    height: 400px;
    width: 100%;
    margin-top: -30px;
  }
  .car-pics {
    margin-left: 0%;
    height: 360px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }
  .text-h4 {
    font-size: 14px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
  }
  .table {
    display: none;
  }
  .mobiletable {
    display: block;
    width: 100%;
  }
  .left-panel {
    width: 100%;
    height: 400px;
    margin-bottom: 10px;
  }
  .top-right-panel {
    width: 100%;
    height: 350px;
  }

  .middle-right-panel {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
    margin-top: 0;
  }
  .divdown {
    background-color: #525453;
    height: 1100px;
    margin-top: -1px;
    padding-top: 20px;
    display: flex;
    padding-left: 10%;
    padding-right: 10%;
  }
  .gradientbig {
    height: 100px;
    background: #111312;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,20 C10,10 30,0 50,10 C70,20 90,5 100,10 L100,20 L0,20 Z" fill=\'%23111312\'/><path d="M0,20 C10,15 30,5 50,15 C70,25 90,10 100,15 L100,20 L0,20 Z" fill=\'%23525453\'/></svg>');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
  .logo {
    max-width: 80%;
    display: block;
    margin-top: 80px;
    margin-left: 10%;
  }
}
</style>
