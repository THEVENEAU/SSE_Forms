import { defineStore } from "pinia";
import { ref } from "vue";
import type FormInterface from "@/interfaces/FormInterface";

export const useFormStore = defineStore('form', () => {
  const selectedForm = ref<FormInterface | undefined>(undefined);

  return { selectedForm };
}, {
  persist: true
});
