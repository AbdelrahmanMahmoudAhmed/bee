<template>
  <div class="content">
    <div class="line"></div>
    <form class="content-form">
      <q-input
        v-model="ph"
        label="Label"
        placeholder="Placeholder"
        hint="With placeholder"
        :dense="dense"
      />
      <q-input
        v-model="ph"
        label="Label"
        placeholder="Placeholder"
        hint="With placeholder"
        :dense="dense"
      />
      <q-btn
        class="q-mt-sm"
        label="Reset Validation"
        @click="reset"
        color="primary"
      />
    </form>
  </div>
</template>

<script>
import { addDoc } from "firebase/firestore";
import { theCollection } from "../../boot/firebase";
import { ref } from "vue";

export default {
  setup() {
    const form = ref(null);
    const name = ref(null);
    const tel = ref(null);

    const addInfo = () => {
      addDoc(theCollection, {
        name: name.value.value,
        phone: tel.value.value,
      })
        .then(() => {
          form.value.reset();
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>

<style lang="scss"></style>
