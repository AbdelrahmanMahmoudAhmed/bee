<template>
  <p>{{ tab }}</p>
  <q-form @submit="submitForm">
    <q-input
      outlined
      v-model="formData.email"
      label="email"
      type="email"
      class="q-mb-md"
    />
    <q-input
      outlined
      v-model="formData.password"
      label="password"
      type="password"
      class="q-mb-md"
    />
    <div class="row">
      <q-space />
      <q-btn color="primary" :label="tab" type="submit" />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["tab"],
  setup(props) {
    const formData = ref({
      email: ref(""),
      password: ref(""),
    });
    const submitForm = () => {
      console.log("login the user");
    };

    return {
      submitForm,
      formData,
    };
  },
};
</script>

<style></style>
