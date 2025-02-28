<template>
  <q-img src="/img/logo.png" alt="logo" :size="200" class="logo q-mr-md" />
  <q-img class="main-pics q-mt-xl prevent-select" src="/img/DSC_0034s.png" />
  <div class="gradientbig" />
  <div class="divdown" style="top: 1000px">
    <!-- <table class="table">
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
                  max-height: 100%;
                  max-width: 100%;
                  margin-top: 0%;
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
    </table> -->

    <table>
      <tr>
        <td>
          <p class="txt">
            Tworzymy pergole ze sztywnej konstrukcji stalowej<br />
            wraz z poszyciem tkaninowym.
          </p>
        </td>
        <td>
          <q-img
            src="img/gallery/lower2.png"
            style="
              max-height: 100%;
              height: 400px;
              width: 850px;
              max-width: 100%;
              margin-left: -180px;
              border-radius: 16px;
            "
          />
        </td>
      </tr>
      <tr>
        <td>
          <q-img
            src="img/gallery/lower1.png"
            style="
              max-height: 100%;
              height: 400px;
              width: 750px;
              max-width: 100%;
              margin-top: 0%;
              border-radius: 16px;
            "
          />
        </td>
        <td>
          <p class="txt">
            Stalowe pergole, wyposażone w zadaszenie,<br />
            zapewnią idealną ochronę przed słońcem.
          </p>
        </td>
      </tr>
    </table>

    <div class="mobiletable">
      <div class="left-panel"></div>
      <div class="middle-right-panel"></div>
      <div class="top-right-panel"></div>
    </div>
  </div>
  <br />
  <div
    style="
      display: flex;
      position: fixed;
      width: 1800px;
      right: -20px;
      z-index: 10;
      top: 0px;
    "
  >
    <div style="width: 80%" />
    <div style="width: 20%">
      <div
        class="text-h4 bg-white b center maintext q-pa-xl fromright"
        style="
          width: 100%;
          height: 600px;
          margin-top: 100px;
          border-radius: 16px 0px 0px 16px;
        "
      >
        <table class="prevent-select">
          <tr>
            Twój relaks
            <br />
            w cieniu
            <strong>naszych pergoli</strong
            ><br /><br />
            <hr />
          </tr>
          <tr>
            <p style="font-size: 27px">Skontaktuj sie z nami juz teraz</p>
            <center>
              <q-btn
                flat
                icon="connect_without_contact"
                size="50px"
                @click="contact"
              />
            </center>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <foot-layout />
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import FootLayout from 'src/layouts/FootLayout.vue';
import { useRouter } from 'vue-router';

export default {
  components: { FootLayout },
  setup() {
    const slide = ref<number>(1);
    const router = useRouter();

    const contact = () => {
      router.push('/contact');
    };

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
      contact,
    };
  },
};
</script>
slide = ref(1);
<style scoped>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.txt {
  color: white;
  font-size: 25px;
}
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
  z-index: 10;
  overflow: hidden;
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
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,20 C10,10 30,0 50,10 C70,20 90,5 100,10 L100,20 L0,20 Z" fill=\'%23111312\' fill-opacity=\'0.5\'/><path d="M0,20 C10,15 30,5 50,15 C70,25 90,10 100,15 L100,20 L0,20 Z" fill=\'%23525453\'/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  margin-top: -00px;

  z-index: 1;
  position: relative;
}
.main-pics {
  height: 800px;
  width: 100%;
  z-index: 0;
  position: relative;
  background: #111312;
  overflow: hidden;
}

.main-pics::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, rgba(17, 19, 18, 0) 0%, #111312 100%);
  z-index: 1;
}

.maintext {
  z-index: 2;
  position: relative;
  margin-bottom: -180px;
  margin-top: 0px;
  color: black;
}

.divdown {
  background-color: #525453;
  height: 1100px;
  padding-top: 100px;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  z-index: 10;
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
  justify-content: right;
  align-items: right;
  margin-top: 90px;
}
.fromright {
  animation-duration: 3s;
  animation-name: slide-in;
}
@keyframes slide-in {
  from {
    translate: 150vw 0;
    scale: 200% 1;
  }

  to {
    translate: 0 0;
    scale: 100% 1;
  }
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
