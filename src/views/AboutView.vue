<script setup lang="ts">
const support = {
  name: "Sébastian THEVENEAU",
  email: "sebastian.theveneau@gmail.com"
}
</script>

<template>
  <div class="container">
    <h1>À propos</h1>
    <v-card>
      <v-card-item prepend-icon="mdi-comment-alert-outline">
        <v-card-title>Contact Support</v-card-title>
        <v-card-subtitle>{{ support.name }} - {{ support.email }}</v-card-subtitle>
      </v-card-item>
      <v-card-text style="text-align: justify">
        <p>Vous pouvez contacter le référent support par email pour toutes questions concernant l'application SSE Forms ou pour faire part d'erreurs (bugs) rencontrées sur l'application.</p>
        <br>
        <a :href="`mailto:${support.email}?subject=SSE%20Forms%20-%20support&body=Bonjour%20${support.name},%0A%0AJe%20vous%20contact%20concernant ...`">
          <v-btn variant="outlined" color="var(--primary-color)">Envoyer un Email</v-btn>
        </a>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-item prepend-icon="mdi-download">
        <v-card-title>Installation Application</v-card-title>
      </v-card-item>
      <v-card-text style="text-align: justify">
        <p>
          SSE Forms peut être directement installé sous forme d'application sur votre appareil.
          Pour cela, accéder au menu "Installer" (<v-icon>mdi-download</v-icon>) de l'application et installer SSE Forms via votre navigateur.
        </p>
        <br>
        <p style="color: gray">
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
