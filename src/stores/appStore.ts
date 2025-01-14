import { defineStore } from "pinia";
import { ref } from "vue";
import type BeforeInstallPromptEvent from "@/interfaces/BeforeInstallPromptEvent";

export const useAppStore = defineStore('app', () => {
  const hideInstallPrompt = ref(false);
  const installPromptEvent = ref<BeforeInstallPromptEvent | null>(null);

  const installApp = async () => {
    console.log(installPromptEvent.value)
    console.log('test')
    if (installPromptEvent.value) {
      installPromptEvent.value.prompt();
      const { outcome } = await installPromptEvent.value.userChoice;
      if(outcome === 'accepted'){
        installPromptEvent.value = null
      }
    }
  };

  return { hideInstallPrompt, installPromptEvent, installApp };
}, {
  persist: true
});
