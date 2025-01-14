<script setup lang="ts">
import {computed} from 'vue';
import {useAppStore} from "@/stores/appStore";

const appStore = useAppStore();
const showSnackbar = computed(() => !appStore.hideInstallPrompt && appStore.installPromptEvent != null)
</script>

<template>
  <v-snackbar
    v-model="showSnackbar"
    timeout="-1"
    rounded="xl"
  >
    <template v-slot:text>
      Installer l'application ?
    </template>
    <template v-slot:actions>
      <v-btn color="green" variant="text" @click="appStore.installApp()">
        Installer
      </v-btn>
      <v-btn icon="mdi-close" variant="text" @click="appStore.hideInstallPrompt = true"></v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>

</style>
