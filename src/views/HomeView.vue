<script setup lang="ts">
import FormsList from "@/components/formsList.vue";
import type FormInterface from "@/interfaces/FormInterface";
import { FormCategory } from "@/interfaces/FormInterface";

const forms: FormInterface[] = [
  {
    name: 'Visite EPI',
    shortname: 'VEPI',
    description: '',
    url: 'https://forms.office.com/e/grjVtFyUYH',
    categories: [FormCategory.manager]
  },
  {
    name: 'Visite managériale de sécurité',
    shortname: 'VMS',
    description: '',
    url: 'https://forms.office.com/e/eeZGU0nm2d',
    categories: [FormCategory.manager]
  },
  {
    name: 'Remontée terrain',
    shortname: 'REX',
    description: '',
    url: 'https://forms.office.com/e/WhqpAaA3cC',
    categories: [FormCategory.manager, FormCategory.administrative, FormCategory.operational]
  },
  {
    name: 'Echange sécurité',
    shortname: 'ES',
    description: '',
    url: 'https://forms.office.com/e/7s9GDu7b9B',
    categories: [FormCategory.manager]
  },
  {
    name: 'Analyse de risque',
    shortname: 'ADR',
    description: '',
    url: 'https://forms.office.com/e/sQsWUAirWh',
    categories: [FormCategory.operational]
  },
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
