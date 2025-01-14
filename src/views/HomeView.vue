<script setup lang="ts">
import FormsList from "@/components/formsList.vue";

const forms = [
  {name: 'Visite EPI', shortname: 'VEPI', url: 'https://forms.office.com/e/grjVtFyUYH'},
  {name: 'Visite managériale de sécurité', shortname: 'VMS', url: 'https://forms.office.com/e/eeZGU0nm2d'},
  {name: 'Remontée terrain', shortname: 'REX', url: 'https://forms.office.com/e/WhqpAaA3cC'},
  {name: 'Echange sécurité', shortname: 'ES', url: 'https://forms.office.com/e/7s9GDu7b9B'},
  {name: 'Analyse de risque', shortname: 'ADR', url: 'https://forms.office.com/e/sQsWUAirWh'},
]
</script>

<template>
  <div class="container">
    <h1>Formulaires</h1>
    <forms-list :forms="forms"></forms-list>
  </div>
</template>

<style scoped>

</style>
