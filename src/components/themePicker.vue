<script setup lang="ts">
import { useTheme } from 'vuetify';
import { computed, onMounted } from 'vue';

const theme = useTheme();

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.global.name.value = savedTheme;
  }
});

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';
  theme.global.name.value = newTheme;
  localStorage.setItem('theme', newTheme);
};

const icon = computed(() =>
  theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
);
</script>


<template>
  <v-btn @click="toggleTheme">
    <v-icon>{{ icon }}</v-icon>
    <slot name="text"></slot>
  </v-btn>
</template>

<style scoped>

</style>
