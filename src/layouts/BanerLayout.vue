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
    <q-icon
      name="phone"
      size="30px"
      style="color: rgba(255, 255, 255, 0.7); margin-right: 1 0px"
    />
    <p class="q-mt-md prevent-select" style="color: rgba(255, 255, 255, 0.7)">
      507 732 936
    </p>
    <q-img
      src="/img/logo.png"
      alt="logo"
      :size="200"
      class="logo q-mr-md prevent-select"
    />
    <!-- <q-icon name="language" class="Legicon text-white" />
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
    </q-btn> -->
    <div class="w-40" />
  </q-bar>
</template>

<script lang="ts">
import { i18n } from 'src/boot/i18n';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const tab = ref<string>('main');
    const chosenLeg = ref<string>('PL');
    const router = useRouter();
    const route = useRoute();

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

    const updateTabFromRoute = () => {
      const currentPath = route.path.replace('/', '');
      if (currentPath === '') {
        tab.value = 'main';
      } else if (['gallery', 'contact'].includes(currentPath)) {
        tab.value = currentPath;
      }
    };
    watch(route, updateTabFromRoute, { immediate: true });
    updateTabFromRoute();
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
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
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
@media only screen and (max-width: 600px) {
  .tabs {
    color: rgb(77, 0, 242);
    height: 100%;
    width: 100vw;
    font-size: 12px;
    min-width: 0;
    max-width: 100vw;
    padding: 0;
  }
  .logo {
    display: none !important;
  }
  .q-mt-md,
  .q-icon[name='phone'],
  p[style*='507 732 936'],
  .q-icon {
    display: none !important;
  }
  .bar {
    height: 44px !important;
    min-height: 44px !important;
    padding: 0 4px !important;
  }
  .fixed-bar {
    height: 44px !important;
    min-height: 44px !important;
  }
  .w-40 {
    width: 10px !important;
    min-width: 0 !important;
  }
  q-tab {
    font-size: 18px !important;
    min-width: 0 !important;
    padding: 0 4px !important;
  }
  .Leg {
    background: white;
    height: 40px;
    font-size: 15px;
    width: 40px;
    border: 2px solid rgb(0, 0, 0);
    position: absolute;
    right: 0;
  }
  .Legicon {
    font-size: 55px;
    color: rgba(0, 0, 0, 0.1);
    margin-right: 10px;
    height: 30px;
    display: none;
  }
}
</style>
