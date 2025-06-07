<template>
  <center>
    <p class="text-h4 center q-pa-xl text-white nazwa prevent-select">
      {{ $t('Menu.phone') }}
    </p>
  </center>
  <div style="display: flex">
    <div class="smol" />
    <div class="q-gutter-md q-ml-xl ramki">
      <q-expansion-item
        default-opened
        expand-separator
        label="Adresy"
        class="text-white"
        style="
          border: 1px solid white;
          border-radius: 16px 16px 0px 0px;
          overflow: hidden;
        "
      >
        <q-card-section class="row q-pa-xs text-white">
          <q-list class="row text-white">
            <q-item class="col-6">
              <div>
                <q-item-label caption class="text-white prevent-select">
                  {{ $t('Siedziba firmy') }}
                </q-item-label>
                <q-item-label class="text-bold text-grey-6">
                  STUDIO98 Roman Sikora <br />
                  41-923 Bytom <br />
                  Ul. Lipowa 12 <br />
                  NIP 626-210-94-80
                </q-item-label>
              </div>
            </q-item>
            <q-item class="col-6">
              <div>
                <q-item-label caption class="text-white prevent-select">
                  {{ $t('Produkcja') }}
                </q-item-label>
                <q-item-label class="text-bold text-grey-6">
                  41-902 Bytom <br />
                  Ul. Karola Miarki 66
                </q-item-label>
              </div>
            </q-item>
          </q-list>
        </q-card-section>
      </q-expansion-item>
      <q-expansion-item
        default-opened
        expand-separator
        label="Kontakt"
        class="text-white"
        style="
          border: 1px solid white;
          overflow: hidden;
          margin-top: -0px;
          border-top: 0px solid white;
        "
      >
        <q-card-section class="row q-pa-xs text-white">
          <q-list class="row text-white">
            <q-item class="col-md-6 col-sm-12">
              <div>
                <q-item-label caption class="text-white prevent-select">
                  {{ $t('Number telefonu') }}
                </q-item-label>
                <q-item-label class="text-bold text-grey-6">
                  507-732-936
                </q-item-label>
              </div>
            </q-item>
            <q-item class="col-md-6 col-sm-12">
              <div>
                <q-item-label caption class="text-white prevent-select">
                  {{ $t('Email') }}
                </q-item-label>
                <q-item-label
                  class="text-bold text-grey-6"
                  style="display: flex"
                >
                  r.sikora@studio98.com.pl
                  <q-btn
                    icon="content_copy"
                    flat
                    dense
                    color="grey-6"
                    style="margin-top: -10px; margin-left: 10px"
                    @click="copyMail()"
                  />
                </q-item-label>
              </div>
            </q-item>
          </q-list>
        </q-card-section>
      </q-expansion-item>
    </div>
    <div
      style="
        width: 35%;
        padding-top: 50px;
        padding-left: 220px;
        font-size: 20px;
      "
      class="pc"
    >
      <p class="text-grey-5 prevent-select">{{ $t('contact.form') }}</p>
      <center>
        <q-btn
          :label="$t('contact.form_button')"
          class="btn"
          @click="changeDialogmobile()"
        />
      </center>
    </div>
  </div>
  <!-- <div class="down" /> -->
  <q-dialog v-model="dialog">
    <form-popup />
  </q-dialog>
  <foot-layout
    style="margin-top: 0px; position: absolute; bottom: 0"
    :showtext="false"
    class="pc"
  />
  <div class="mobile-footer mobile">&copy; Copyright © Studio98 2025</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import FormPopup from './FormPopup.vue';
import FootLayout from 'src/layouts/FootLayout.vue';
import { useQuasar } from 'quasar';
export default {
  components: { FormPopup, FootLayout },
  setup() {
    const dialog = ref(false);
    const $q = useQuasar();
    const changeDialogmobile = () => {
      dialog.value = true;
    };
    const copyMail = () => {
      $q.notify({
        type: 'positive',
        message: 'Mail skopiowany do schowka',
      });
    };
    return { dialog, changeDialogmobile, copyMail };
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
  margin-top: 27px;
  background: #111312;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,20 C10,10 30,0 50,10 C70,20 90,5 100,10 L100,20 L0,20 Z" fill=\'%23111312\'/><path d="M0,20 C10,15 30,5 50,15 C70,25 90,10 100,15 L100,20 L0,20 Z" fill=\'%23525453\'/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;
}
.q-gutter-md.row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: -80px;
}
.nazwa {
  margin-top: 70px;
  margin-bottom: 50px;
}
.ramki {
  width: 27%;
}
a {
  font-size: 1.7cap;
  text-decoration: none;
  margin-left: 20px;
  color: white;
  transition: transform 0.3s ease;
}

.text {
  background-color: #3b3d3c;
  padding: 2%;
  width: 30%;
  height: 500px;
  color: white;
  border-radius: 16px;
}

.contact {
  background-color: #3b3d3c;
  padding: 2%;
  width: 100%;
  border-radius: 16px;
  color: white;
}
.mobile {
  display: none;
}

.form {
  background-color: #3b3d3c;
  font-size: 17px;
  padding: 5%;
  width: 100%;
  height: 300px;
  margin-top: 15px;
  border-radius: 16px;
  color: white;
}
.btn {
  margin-top: 20px;
  border-radius: 8px;
  width: 250px;
  height: 50px;
  color: white;
  background-color: #525453;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: rgb(25, 118, 210);
}
.smol {
  width: 10%;
}
@media only screen and (max-width: 600px) {
  .mobile {
    display: block;
  }
  .mobile-footer {
    display: block !important;
    width: 100vw;
    background: #222;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 18px 0;
    font-size: 15px;
    border-top: 1px solid #333;
    position: fixed !important;
    left: 0;
    bottom: 0;
    z-index: 100;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .smol {
    width: 0%;
  }
  .q-gutter-md.row {
    display: none;
    justify-content: center;
    align-items: flex-start;
    margin-top: -80px;
  }
  .form {
    background-color: #3b3d3c;
    font-size: 17px;
    padding: 5%;
    width: 100%;
    height: 250px;
    margin-top: 15px;
    border-radius: 16px;
    color: white;
  }
  .btn {
    margin-top: 0px;
    border-radius: 8px;
    width: 250px;
    height: 50px;
    color: white;
    background-color: #525453;
    transition: background-color 0.3s ease;
  }
  .nazwa {
    margin-top: 60px;
    margin-bottom: -10px;
  }
  .pc {
    display: none !important;
  }
  .ramki {
    width: 95%;
  }
  .q-ml-xl {
    margin: 0px !important;
  }
}
</style>
