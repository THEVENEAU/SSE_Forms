<script setup lang="ts">
import { useRouter } from "vue-router";
import {computed, ref} from "vue";
import {useFormStore} from "@/stores/formStore";
import {useAppStore} from "@/stores/appStore";
import ThemePicker from "@/components/themePicker.vue";

const formStore = useFormStore()
const appStore = useAppStore()
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
    <div v-if="$vuetify.display.mdAndUp">
      <v-app-bar
        color="primary"
        :elevation="2"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <span @click="router.push('/')" style="cursor: pointer">SSE Forms</span>
        </template>
        <template v-slot:append>
          <theme-picker />
          <v-avatar image="/favicon.svg" rounded="0" />
        </template>
      </v-app-bar>
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
          <div v-else>
            <v-list-item
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
            <v-list-item
              v-if="appStore.showInstall"
              @click="appStore.installApp()"
              rounded="xl"
            >
              <template v-slot:prepend>
                <v-icon>mdi-download</v-icon>
              </template>
              <v-list-item-title v-text="'Installer'"></v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
    </div>

    <div v-else>
      <v-bottom-navigation
        v-model="currentRouteIndex"
        bg-color="primary"
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
          <v-avatar v-if="route.name === 'Accueil'" image="/favicon.svg" rounded="0" size="x-small" />
          <v-icon v-else>{{ route.meta.icon }}</v-icon>
          <span>{{ route.name }}</span>
        </v-btn>
        <v-btn
          v-if="appStore.showInstall"
          @click="appStore.installApp()"
        >
          <v-icon>mdi-download</v-icon>
          <span>Installer</span>
        </v-btn>
        <theme-picker>
          <template v-slot:text><span>Thème</span></template>
        </theme-picker>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<style scoped>

</style>
