<script setup lang="ts">
import type FormInterface from "@/interfaces/FormInterface";
import {useFormStore} from "@/stores/formStore";

const formStore = useFormStore();

const props = defineProps<{
  forms: FormInterface[];
}>();
</script>

<template>
  <div>
    <v-list>
      <v-list-subheader>Formulaires</v-list-subheader>

      <v-list-item
        v-for="form in forms"
        :key="form.name"
        :value="form.url"
        @click="formStore.selectedForm = form"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-avatar :text="form.shortname"></v-avatar>
        </template>
        <v-list-item-title v-text="form.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped>

</style>
