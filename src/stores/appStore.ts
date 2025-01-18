import { defineStore } from "pinia";
import {computed, ref} from "vue";
import type BeforeInstallPromptEvent from "@/interfaces/BeforeInstallPromptEvent";
import {useFormStore} from "@/stores/formStore";
import {useTheme} from "vuetify";

export const useAppStore = defineStore('app', () => {
  const hideInstallPrompt = ref(false);
  const installPromptEvent = ref<BeforeInstallPromptEvent | null>(null);

  const isStandalone = computed(() => window.matchMedia('(display-mode: standalone)').matches)
  const showInstall = computed(() => !useFormStore().selectedForm && !isStandalone.value && installPromptEvent.value != null)

  const installApp = async () => {
    if (installPromptEvent.value) {
      installPromptEvent.value.prompt();
      const { outcome } = await installPromptEvent.value.userChoice;
      if(outcome === 'accepted'){
        installPromptEvent.value = null
      }
    }
  };

  return { hideInstallPrompt, installPromptEvent, isStandalone, showInstall, installApp };
}, {
  persist: true
});
