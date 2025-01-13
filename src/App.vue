<script setup lang="ts">
import AppBar from "@/components/appBar.vue";
import FormIframe from "@/components/formIframe.vue";
import {useFormStore} from "@/stores/formStore";

const formStore = useFormStore()
</script>

<template>
  <v-app>
    <app-bar />
    <v-main>
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
