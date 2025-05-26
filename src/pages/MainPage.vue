<template>
  <q-img src="/img/logo.png" alt="logo" :size="200" class="logo q-mr-md" />

  <q-img class="main-pics q-mt-xl prevent-select pc" src="/img/DSC_0034s.png" />
  <q-img
    class="main-pics q-mt-xl prevent-select mobile"
    src="/img/DSC_0034s.png"
  />
  <div
    class="divdown row pc"
    style="
      top: 1000px;
      overflow-x: hidden;
      overflow-y: hidden;
      margin-bottom: -1600px;
    "
  >
    <table class="q-mb-xl pc">
      <tr>
        <td>
          <p class="txt">
            Marzysz o przestrzeni, która będzie idealnym miejscem do odpoczynku,
            pracy i spotkań z bliskimi? Z nami stworzysz taras, który będzie
            spełnieniem Twoich oczekiwań! Oferujemy nowoczesne pergole, które
            zapewnią Ci komfort niezależnie od pogody - zarówno w upalne dni,
            jak i podczas deszczowych chwil.
          </p>
        </td>
        <td>
          <div
            ref="elementRef"
            :class="['hidden-right', { visible: isVisible }]"
          >
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
            >
              <p
                style="
                  margin-left: 20px;
                  position: absolute;
                  bottom: 0;
                  margin-top: 20px;
                  font-size: 30px;
                  color: white;
                  -webkit-text-stroke: 1px black;
                "
              >
                PERGOLA UROZMAIZONA FIERANKAMI
              </p>
            </q-img>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div
            ref="elementRef1"
            :class="['hidden-left', { visible: isVisible1 }]"
          >
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
            >
              <p
                style="
                  margin-right: 20px;
                  position: absolute;
                  bottom: 0;
                  margin-top: 20px;
                  font-size: 30px;
                  right: 0;
                  color: white;
                  -webkit-text-stroke: 1px black;
                "
              >
                SKŁADANY DACH
              </p>
            </q-img>
          </div>
        </td>
        <td>
          <p class="txt">
            Nasze pergole to połączenie funkcjonalności, estetyki i trwałości.
            Dzięki innowacyjnym rozwiązaniom możesz w pełni cieszyć się każdą
            chwilą spędzoną na świeżym powietrzu - czy to podczas pracy w
            ogrodzie, relaksu z książką, czy spotkań z rodziną i przyjaciółmi.
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="txt">
            W STUDIO98 wierzymy, że Twój taras to miejsce, w którym ład i
            komfort idą w parze z wyjątkowym stylem. Dzięki naszym produktom
            stworzysz przestrzeń, która będzie zachwycać przez cały rok,
            niezależnie od zmieniających się warunków atmosferycznych. Z nami
            każda chwila na tarasie to czysta przyjemność!
          </p>
        </td>
        <td>
          <div
            ref="elementRef2"
            :class="['hidden-right', { visible: isVisible2 }]"
          >
            <q-img
              src="img/gallery/lower3.png"
              style="
                max-height: 100%;
                height: 400px;
                width: 850px;
                max-width: 100%;
                margin-left: -180px;
                border-radius: 16px;
              "
            >
              <p
                style="
                  margin-left: 20px;
                  position: absolute;
                  bottom: 0;
                  margin-top: 20px;
                  font-size: 30px;
                  color: white;
                  -webkit-text-stroke: 1px black;
                "
              >
                DREWNIANE ROLETY
              </p>
            </q-img>
          </div>
        </td>
      </tr>
    </table>
    <p class="txt2 row q-mt-xl q-mb-xl pc">
      Stalowe pergole z zadaszeniem z poliwęglanu to nowoczesne rozwiązanie,
      które zapewnia wyjątkową ochronę przed warunkami atmosferycznymi, w tym
      deszczem, wiatrem czy słońcem. Dzięki zastosowaniu stali o wysokiej
      trwałości, nasze pergole charakteryzują się nie tylko estetyką, ale
      również odpornością na uszkodzenia mechaniczne oraz zmienne warunki
      pogodowe. Zadaszenie z poliwęglanu skutecznie chroni przed opadami,
      tworząc przytulną i funkcjonalną przestrzeń do wypoczynku i relaksu przez
      cały rok. Doskonałe właściwości materiału poliwęglanowego zapewniają
      optymalną ochronę przed promieniowaniem UV, jednocześnie pozwalając na
      przepuszczanie światła, co sprzyja stworzeniu przyjemnej atmosfery w
      ogrodzie czy na tarasie. Nasze pergole to idealne rozwiązanie dla osób
      poszukujących eleganckiego, trwałego i komfortowego miejsca do spędzania
      czasu na świeżym powietrzu, bez obawy o kaprysy pogody.
    </p>
    <p class="txt2 row q-mt-xl q-mb-xl pc">
      Pergole o solidnej stalowej konstrukcji, które oferujemy, zapewniają
      trwałość oraz odporność na zmienne warunki atmosferyczne. Wyposażone w
      trwałe poszycie tkaninowe, łączą estetyczny wygląd z funkcjonalnością,
      chroniąc przed deszczem i słońcem. Wysokiej jakości materiał jest odporny
      na promieniowanie UV i łatwy w konserwacji, co zapewnia komfort
      użytkowania.
    </p>
    <p class="txt2 row q-mt-xl q-mb-xl pc">
      Dodatkowo, <strong>rolety rzymskie</strong> stanowią doskonałe rozwiązanie
      nie zaciemniając pomieszczeń, a jednocześnie tworząc wyjątkowy klimat.
      Struktura rolety nadaje wnętrzom elegancji, subtelnie kontrolując ilość
      naturalnego światła i wprowadzając przytulną atmosferę do każdego
      pomieszczenia.
    </p>
    <br /><br />
    <p class="txt2 row q-mt-xl q-mb-xl pc">
      Drewniane, ruchome panele żaluzjowe wykonane z najwyższej jakości świerka
      skandynawskiego stanowią idealne rozwiązanie do ochrony przed
      niekorzystnymi warunkami atmosferycznymi, w tym wiatrem i deszczem,
      zapewniając jednocześnie doskonałą prywatność. Dzięki zastosowaniu
      naturalnego drewna, panele nie tylko skutecznie chronią przestrzeń, ale
      także wprowadzają do ogrodu elegancki, ciepły i ponadczasowy charakter.
      Ich funkcjonalna konstrukcja pozwala na łatwą regulację, co umożliwia
      optymalne dostosowanie poziomu osłony w zależności od indywidualnych
      potrzeb użytkownika. W ten sposób, pergola ogrodowa staje się nie tylko
      miejscem odpoczynku, ale także komfortowym i przytulnym zakątkiem, w
      którym można cieszyć się intymnością i relaksem przez cały rok. Dodatkowo,
      szeroka paleta kolorów dostępnych paneli zadowoli nawet najbardziej
      wymagających klientów, umożliwiając dopasowanie do różnych stylów
      architektonicznych i preferencji estetycznych.
    </p>
    <p class="txt2 row q-mt-xl q-mb-xl pc">
      Oferujemy ponad pięćdziesiąt kolorów materiałów wodoodpornych, które
      doskonale pasują do różnych stylów wnętrz. W naszej własnej szwalni
      szyjemy rolety rzymskie i zasłony, łącząc elegancję z funkcjonalnością.
      Każdy produkt charakteryzuje się wysoką jakością wykonania, trwałością
      oraz estetyką, spełniając wymagania nawet najbardziej wymagających
      klientów.
    </p>
    <p class="txt2 row q-mt-xl q-mb-xl pc">
      Zapewniamy kompleksową obsługę – od pomocy przy wyborze materiału, po
      profesjonalny montaż. Nasze produkty nie tylko wzbogacą wygląd wnętrza,
      ale również zapewnią komfort i ochronę przed niekorzystnymi warunkami
      atmosferycznymi.
    </p>

    <!-- <div class="mobiletable">
      <div class="left-panel"></div>
      <div class="middle-right-panel"></div>
      <div class="top-right-panel"></div>
    </div> -->
  </div>
  <main-page-content class="mobile" />
  <br />
  <div class="pc island">
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
            {{
              $t('Menu.slogan.1')
            }}
            <br />
            {{
              $t('Menu.slogan.2')
            }}
            <strong> {{ $t('Menu.slogan.3') }}</strong>
            <br />
            <hr />
          </tr>
          <tr>
            <p style="font-size: 27px">{{ $t('Menu.contact') }}</p>
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
  <foot-layout style="margin-top: 1700px" />
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import FootLayout from 'src/layouts/FootLayout.vue';
import { useRouter } from 'vue-router';
import MainPageContent from './MainPageContent.vue';

export default {
  components: { FootLayout, MainPageContent },
  setup() {
    const router = useRouter();

    const isVisible1 = ref(false);
    const isVisible2 = ref(false);
    const isVisible = ref(false);

    const elementRef1 = ref<HTMLElement | null>(null);
    const elementRef2 = ref<HTMLElement | null>(null);
    const elementRef = ref<HTMLElement | null>(null);

    const contact = () => {
      router.push('/contact');
    };

    let observer1: IntersectionObserver | null = null;
    let observer2: IntersectionObserver | null = null;
    let observer3: IntersectionObserver | null = null;

    onMounted(() => {
      observer1 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible1.value = true;
            observer1?.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer2 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible2.value = true;
            observer2?.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer3 = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer3?.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef1.value) observer1.observe(elementRef1.value);
      if (elementRef2.value) observer2.observe(elementRef2.value);
      if (elementRef.value) observer3.observe(elementRef.value);
    });

    onUnmounted(() => {
      observer1?.disconnect();
      observer2?.disconnect();
      observer3?.disconnect();
    });

    return {
      isVisible1,
      isVisible2,
      isVisible,
      elementRef1,
      elementRef2,
      elementRef,
      contact,
    };
  },
};
</script>
slide = ref(1);
<style scoped>
.hidden-left {
  position: relative;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 2s ease-out, opacity 2s ease-out;
}

.hidden-right {
  position: relative;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 2s ease-out, opacity 2s ease-out;
}

.visible {
  transform: translateX(0);
  opacity: 1;
}

.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.txt {
  color: white;
  font-size: 20px;
  width: 70%;
}
.txt2 {
  color: white;
  font-size: 20px;
  padding-right: 250px;
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
  background-color: #111312;
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
.pc {
  display: block;
}
.mobile {
  display: none;
}
.island {
  display: flex;
  position: fixed;
  width: 1800px;
  right: -20px;
  z-index: 10;
  top: 0px;
}
@media only screen and (max-width: 600px) {
  .main-pics {
    height: 400px;
    width: 100%;
    z-index: 0;
    position: relative;
    background: #111312;
    overflow: hidden;
    margin-top: 10px;
    margin-left: 0px;
  }
  .pc {
    display: none;
  }
  .mobile {
    display: block;
  }
  .islan {
    width: 0px;
  }
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
