<template>
  <q-bar class="bar fixed-bar bg-black">
    <q-tabs
      v-model="tab"
      narrow-indicator
      dense
      align="justify"
      class="tabs text-white"
    >
      <q-tab :ripple="false" name="main" :label="$t('Menu.main')" />
      <q-tab :ripple="false" name="gallery" :label="$t('Menu.photos')" />
      <q-tab :ripple="false" name="contact" :label="$t('Menu.phone')" />
    </q-tabs>
    <q-space />
    <q-img src="/img/logo.png" alt="logo" :size="200" class="logo q-mr-md" />
    <q-icon name="language" class="Legicon text-white" />
    <q-btn round class="Leg" :label="chosenLeg">
      <q-menu :offset="[20, 5]">
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup @click="switchLeg('PL')">
            <q-item-section>PL</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="switchLeg('ENG')">
            <q-item-section>ENG</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="w-40" />
  </q-bar>
</template>

<script lang="ts">
import { i18n } from 'src/boot/i18n';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const tab = ref<string>('main');
    const chosenLeg = ref<string>('PL');
    const router = useRouter();

    const switchLeg = (leg: string) => {
      if (leg === 'PL') {
        i18n.global.locale = 'pl-PL';
      } else if (leg === 'ENG') {
        i18n.global.locale = 'eng-ENG';
      }
      chosenLeg.value = leg === 'PL' ? 'PL' : 'ENG';
    };

    watch(tab, (newTab) => {
      if (newTab === 'main') {
        router.push('/');
      } else if (newTab === 'gallery') {
        router.push('/gallery');
      } else if (newTab === 'contact') {
        router.push('/contact');
      }
    });

    return {
      tab,
      switchLeg,
      chosenLeg,
      router,
    };
  },
};
</script>

<style scoped>
.logo {
  max-width: 250px;
}
.bar {
  height: 50px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.fixed-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.w-40 {
  width: 40px;
}

.Leg {
  background: white;
  height: 40px;
  font-size: 15px;
  width: 40px;
  border: 2px solid rgb(0, 0, 0);
}

.Legicon {
  font-size: 55px;
  color: rgba(0, 0, 0, 0.1);
  margin-right: -30px;
  height: 30px;
}

.tabs {
  color: rgb(77, 0, 242);
  height: 100%;
  width: 600px;
  font-size: 10px;
}

q-tab {
  font-size: 30px;
}
</style>
