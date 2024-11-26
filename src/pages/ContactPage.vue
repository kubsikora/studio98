<template>
  <center>
    <p
      class="text-h4 center q-pa-xl"
      style="margin-top: 70px; margin-bottom: 50px"
    >
      {{ $t('Menu.phone') }}
    </p>
  </center>
  <div class="q-gutter-md row justify-center">
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
            <q-btn :label="$t('contact.form_button')" class="btn" />
          </center>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <FootLayout style="margin-top: 100px" />
</template>

<script lang="ts">
import FootLayout from '/src/layouts/FootLayout.vue';

export default {
  components: {
    FootLayout,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.q-gutter-md.row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: -80px;
}

a {
  font-size: 1.7cap;
  text-decoration: none;
  margin-left: 20px;
  color: rgb(93, 93, 93);
  transition: transform 0.3s ease;
}

.text {
  padding: 2%;
  width: 30%;
  height: 500px;
  border-radius: 16px;
}

.contact {
  padding: 2%;
  width: 100%;
  border-radius: 16px;
}

.form {
  font-size: 17px;
  padding: 5%;
  width: 100%;
  height: 300px;
  margin-top: 15px;
  border-radius: 16px;
  color: rgba(0, 0, 0, 0.7);
}
.btn {
  margin-top: 20px;
  border-radius: 8px;
  width: 250px;
  height: 50px;
  color: rgb(93, 93, 249);
  background-color: rgba(255, 255, 255);
}
</style>
