<script setup lang="ts">
import {useFormStore} from "@/stores/formStore";

const formStore = useFormStore();
</script>

<template>
  <iframe
    v-if="formStore.selectedForm?.url"
    :src="formStore.selectedForm.url"
    allowfullscreen
  ></iframe>
</template>

<style scoped>

</style>
