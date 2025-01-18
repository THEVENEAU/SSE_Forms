import { defineStore } from "pinia";
import { ref } from "vue";
import type FormInterface from "@/interfaces/FormInterface";
import {FormCategory} from "@/interfaces/FormInterface";

export const useFormStore = defineStore('form', () => {
  const selectedForm = ref<FormInterface | undefined>(undefined);
  const selectedCategory = ref<FormCategory | 'All'>('All');

  return { selectedForm, selectedCategory };
}, {
  persist: true
});
