<template>
  <div
    style="
      background-color: black;
      width: 100%;
      height: 250px;
      margin-top: -30px;
    "
    class="q-px-xl q-pt-xl"
  >
    <div>
      <q-list class="row">
        <q-item class="col-1">
          <div>
            <q-item-label caption class="text-white" style="font-size: 15px">
            </q-item-label>
          </div>
        </q-item>
        <q-item class="col-2">
          <div>
            <q-item-label
              v-if="showtext"
              caption
              class="text-white prevent-select"
              style="font-size: 15px"
            >
              {{ $t('Dane kontaktowe') }}
            </q-item-label>
          </div>
        </q-item>
      </q-list>

      <q-list class="row">
        <q-item class="col-1">
          <div>
            <q-item-label caption class="text-white" style="font-size: 15px">
            </q-item-label>
          </div>
        </q-item>
        <q-item class="col-1">
          <div>
            <q-item-label
              v-if="showtext"
              caption
              class="text-white prevent-select"
            >
              {{ $t('Number telefonu') }}
            </q-item-label>
            <q-item-label v-if="showtext" class="text-bold text-grey-6">
              507-732-936
            </q-item-label>
          </div>
        </q-item>
        <q-item class="col-2">
          <div>
            <q-item-label
              v-if="showtext"
              caption
              class="text-white prevent-select"
            >
              {{ $t('Siedziba firmy') }}
            </q-item-label>
            <q-item-label v-if="showtext" class="text-bold text-grey-6">
              STUDIO98 Roman Sikora 41-923 Bytom Ul. Lipowa 12 NIP 626-210-94-80
            </q-item-label>
          </div>
        </q-item>
        <q-item class="col-2">
          <div>
            <q-item-label
              v-if="showtext"
              caption
              class="text-white prevent-select"
            >
              {{ $t('Produkcja') }}
            </q-item-label>
            <q-item-label v-if="showtext" class="text-bold text-grey-6">
              41-902 Bytom Ul. Karola Miarki 66
            </q-item-label>
          </div>
        </q-item>
      </q-list>

      <q-list class="row">
        <q-item class="col-1">
          <div>
            <q-item-label caption class="text-white" style="font-size: 15px">
            </q-item-label>
          </div>
        </q-item>
        <q-item class="col-2">
          <div>
            <q-item-label
              v-if="showtext"
              caption
              class="text-white prevent-select"
            >
              {{ $t('Email') }}
            </q-item-label>
            <q-item-label v-if="showtext" class="text-bold text-grey-6">
              r.sikora@studio98.com.pl
            </q-item-label>
          </div>
        </q-item>
      </q-list>
    </div>
    <center class="text-grey-9 prevent-select">
      Copyright © Studio98 2025
    </center>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    showtext: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.bar {
  margin-top: 80px;
  height: 120px;
  background: #ffffff8c;
}

.background {
  position: relative;
  background: #cbcfd2;
  height: 00px;
  margin-top: 50px;
}

.background::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 0 C25 10, 75 0, 100 10 L100 10 L0 10 Z" fill="%23cbcfd2"/></svg>');
  background-size: cover;
  background-repeat: no-repeat;
  pointer-events: none;
  margin-bottom: 00px;
}

.custom-icon {
  transform: translate(50%, -50%);
  z-index: 1;
}
</style>
