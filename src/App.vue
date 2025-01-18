<script setup lang="ts">
import AppBar from "@/components/appBar.vue";
import FormIframe from "@/components/formIframe.vue";
import {useFormStore} from "@/stores/formStore";
import InstallPrompt from "@/components/installPrompt.vue";
import {onMounted} from "vue";
import {useAppStore} from "@/stores/appStore";
import type BeforeInstallPromptEvent from "@/interfaces/BeforeInstallPromptEvent";

const formStore = useFormStore()
const appStore = useAppStore()

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    appStore.installPromptEvent = e as BeforeInstallPromptEvent;
  });
});
</script>

<template>
  <v-app>
    <app-bar />
    <v-main>
      <install-prompt />
      <form-iframe v-if="formStore.selectedForm" class="iframe"/>
        <RouterView v-else />
    </v-main>
  </v-app>
</template>

<style scoped>
.iframe{
  width: 100%;
  height: calc(100% - env(safe-area-inset-bottom));
}
</style>
