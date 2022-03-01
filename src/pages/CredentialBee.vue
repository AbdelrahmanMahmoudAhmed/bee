<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
  hi
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";

import LoginRegister from "../components/admen-components/LoginRegister.vue";

export default defineComponent({
  components: { LoginRegister },
  setup() {
    return {
      tab: ref("login"),
    };
  },
});
</script>

<style></style>
