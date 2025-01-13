<script setup lang="ts">
import { useRouter } from "vue-router";
import {computed, ref} from "vue";
import {useFormStore} from "@/stores/formStore";

const formStore = useFormStore()
const router = useRouter()
const drawer = ref(false)

const routes = router.getRoutes().filter(route => route.name)
const currentRouteIndex = computed(() => routes.findIndex(
  route => route.path === router.currentRoute.value.path
));

const closeForm = () => {
  formStore.selectedForm = undefined
}
</script>

<template>
  <div style="z-index: 9999;">
    <v-app-bar
      v-if="$vuetify.display.mdAndUp"
      color="#088549"
      :elevation="2"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>SSE Forms</v-app-bar-title>
    </v-app-bar>

    <v-bottom-navigation
      v-else
      v-model="currentRouteIndex"
      bg-color="#088549"
      mode="shift"
    >
      <v-btn
        v-if="formStore.selectedForm"
        @click="closeForm"
      >
        <v-icon>mdi-arrow-left</v-icon>
        <span>Retour</span>
      </v-btn>
      <v-btn
        v-else
        v-for="route in routes"
        :key="route.name"
        @click="router.push(route.path)"
      >
        <v-icon>{{ route.meta.icon }}</v-icon>
        <span>{{ route.name }}</span>
      </v-btn>
    </v-bottom-navigation>

    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list style="padding: 10px">
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item
          v-if="formStore.selectedForm"
          @click="closeForm"
          rounded="xl"
        >
          <template v-slot:prepend>
            <v-icon>mdi-arrow-left</v-icon>
          </template>
          <v-list-item-title v-text="'Retour'"></v-list-item-title>
        </v-list-item>
        <v-list-item
          v-else
          v-for="route in routes"
          :key="route.name"
          :value="route"
          @click="router.push(route.path)"
          rounded="xl"
          :variant="route.name === routes[currentRouteIndex].name ? 'tonal' : 'text'"
        >
          <template v-slot:prepend>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </template>
          <v-list-item-title v-text="route.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>

</style>
