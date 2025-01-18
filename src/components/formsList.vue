<script setup lang="ts">
import type FormInterface from "@/interfaces/FormInterface";
import {useFormStore} from "@/stores/formStore";
import {computed, ref} from "vue";

const formStore = useFormStore();
const useIframe = ref(false)

const props = defineProps<{
  forms: FormInterface[];
}>();

const categories = computed(() => ['All', ...new Set(props.forms.flatMap(form => form.categories))])
const filteredForms = computed(() => props.forms.filter(
  form => formStore.selectedCategory === 'All' || form.categories.some(category => category === formStore.selectedCategory))
)

const openForm = (form: FormInterface) => {
  if(useIframe.value){
    formStore.selectedForm = form
  } else {
    window.open(new URL(form.url), form.name);
  }
}
</script>

<template>
  <v-list style="padding: 10px;">
    <v-list-item
      rounded="xl"
      density="comfortable"
    >
      <template v-slot:prepend>
        <div>
          <v-switch
            v-model="useIframe"
            :label="`${useIframe ? 'Ouvrir dans l\'application' : 'Ouvrir dans le navigateur'}`"
            color="success"
            disabled
            hide-details
          ></v-switch>
          <br>
          <v-select
            label="Catégorie"
            v-model="formStore.selectedCategory"
            :items="categories"
            variant="underlined"
            density="compact"
          ></v-select>
        </div>
      </template>
    </v-list-item>
    <v-list-item
      v-for="form in filteredForms"
      :key="form.name"
      :value="form.url"
      rounded="xl"
      density="comfortable"
      lines="two"
    >
      <template v-slot:prepend>
        <v-avatar :text="form.shortname" color="primary" @click="openForm(form)" />
      </template>
      <v-list-item-title v-text="form.name" @click="openForm(form)" />
      <template v-slot:append>
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              icon="mdi-information-variant-circle-outline"
              variant="plain"
              color="primary"
              v-tooltip="`Informations ${form.shortname}`"
            />
          </template>

          <template v-slot:default="{ isActive }">
            <v-card :title="form.name" color="primary">
              <v-card-text v-text="form.description" />

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  icon="mdi-close"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>
