<template>
  <center>
    <p class="text-h4 center q-pa-xl text-white nazwa">
      {{ $t('Menu.phone') }}
    </p>
  </center>
  <div class="q-gutter-md row justify-center pc">
    <q-card class="text">
      <!-- <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeV4kZsapvcyjLV51he7Fezl6X332D2EneCew0WM5ErbKM7Rw/viewform?embedded=true"
        width="118%"
        height="490"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style="margin-left: -10%; margin-top: -7%"
        >Ładuję…</iframe
      > -->
    </q-card>
    <div style="width: 27%">
      <q-card class="contact">
        <q-card-section>
          <q-icon name="phone" size="50px" color="primary" />
          <a href="tel:+48507732936">tel.: 507 732 936</a>
        </q-card-section>
        <q-card-section>
          <q-icon name="email" size="50px" color="primary" />
          <a href="mailto:r.sikora@studio98.com.pl "
            >r.sikora@studio98.com.pl
          </a>
        </q-card-section>
      </q-card>
      <q-card class="form">
        <q-card-section>
          {{ $t('contact.form') }}
        </q-card-section>
        <q-card-section>
          <center>
            <q-btn
              :label="$t('contact.form_button')"
              class="btn"
              @click="changeDialogmobile()"
            />
          </center>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div style="width: 90%; margin-left: 5%" class="mobile">
    <q-card class="contact">
      <q-card-section>
        <q-icon name="phone" size="50px" color="primary" />
        <a href="tel:+48507732936">tel.: 507 732 936</a>
      </q-card-section>
      <q-card-section>
        <q-icon name="email" size="50px" color="primary" />
        <a href="mailto:r.sikora@studio98.com.pl ">r.sikora@studio98.com.pl </a>
      </q-card-section>
    </q-card>
    <q-card class="form">
      <q-card-section>
        {{ $t('contact.form') }}
      </q-card-section>
      <q-card-section>
        <center>
          <q-btn
            :label="$t('contact.form_button')"
            class="btn"
            @click="changeDialogmobile()"
          />
        </center>
      </q-card-section>
    </q-card>
  </div>
  <div class="down" />
  <q-dialog v-model="dialog">
    <form-popup />
  </q-dialog>
</template>

<script lang="ts">
import { ref } from 'vue';
import FormPopup from './FormPopup.vue';
export default {
  components: { FormPopup },
  setup() {
    const dialog = ref(false);
    const changeDialogmobile = () => {
      dialog.value = true;
    };
    return { dialog, changeDialogmobile };
  },
};
</script>

<style scoped>
.down {
  height: 200px;
  margin-top: 27px;
  background: #111312;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,20 C10,10 30,0 50,10 C70,20 90,5 100,10 L100,20 L0,20 Z" fill=\'%23111312\'/><path d="M0,20 C10,15 30,5 50,15 C70,25 90,10 100,15 L100,20 L0,20 Z" fill=\'%23525453\'/></svg>');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  position: relative;
  bottom: 0;
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
@media only screen and (max-width: 600px) {
  .mobile {
    display: block;
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
}
</style>
