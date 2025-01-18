<script setup lang="ts">
import {useAppStore} from "@/stores/appStore";

const appStore = useAppStore();
const support = {
  email: "securite.dki.fr@dekra.com"
}
</script>

<template>
  <div class="container">
    <h1>À propos</h1>
    <v-card>
      <v-card-item prepend-icon="mdi-comment-alert-outline">
        <v-card-title>Contact Support</v-card-title>
        <v-card-subtitle>{{ support.email }}</v-card-subtitle>
      </v-card-item>
      <v-card-text style="text-align: justify">
        <p>Vous pouvez contacter le(s) référent(s) support par email pour toutes questions concernant l'application SSE Forms ou pour faire part d'erreurs (bugs) rencontrées sur l'application.</p>
      </v-card-text>
    </v-card>

    <v-card v-if="appStore.showInstall">
      <v-card-item prepend-icon="mdi-download">
        <v-card-title>Installation Application</v-card-title>
      </v-card-item>
      <v-card-text style="text-align: justify">
        <p>
          SSE Forms peut être directement installé sous forme d'application sur votre appareil.
          Pour cela, accéder au menu "Installer" (<v-icon>mdi-download</v-icon>) de l'application et installer SSE Forms via votre navigateur.
        </p>
        <br>
        <p style="color: var(--warning-color)">
          <v-icon>mdi-alert-outline</v-icon> <strong>MAC OS, IOS ou navigateur incompatible !</strong><br><br>
          Si vous utilisez un appareil Apple (Safari) ou que votre navigateur ne permet pas d'installer l'application directement depuis le menu "Installer" (<v-icon>mdi-download</v-icon>).
          Vous devez accéder au menu "Partager" de votre navigateur et "Ajouter à l'écran d'accueil".
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>

</style>
