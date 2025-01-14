<script setup lang="ts">
import type FormInterface from "@/interfaces/FormInterface";
import {useFormStore} from "@/stores/formStore";
import {ref} from "vue";

const formStore = useFormStore();
const useIframe = ref(true)

const props = defineProps<{
  forms: FormInterface[];
}>();

const openForm = (form: FormInterface) => {
  if(useIframe.value){
    formStore.selectedForm = form
  } else {
    window.open(new URL(form.url), form.name);
  }
}
</script>

<template>
  <v-list>
    <v-list-item
      rounded="xl"
      density="comfortable"
    >
      <template v-slot:prepend>
        <v-switch
          v-model="useIframe"
          :label="`${useIframe ? 'Ouvrir dans l\'application' : 'Ouvrir dans le navigateur'}`"
          color="success"
          hide-details
        ></v-switch>
      </template>
    </v-list-item>
    <v-list-item
      v-for="form in forms"
      :key="form.name"
      :value="form.url"
      @click="openForm(form)"
      rounded="xl"
      density="comfortable"
      lines="two"
      style="margin-bottom: 20px"
    >
      <template v-slot:prepend>
        <v-avatar :text="form.shortname"></v-avatar>
      </template>
      <v-list-item-title v-text="form.name"></v-list-item-title>
      <v-list-item-subtitle>{{ form.url }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>
