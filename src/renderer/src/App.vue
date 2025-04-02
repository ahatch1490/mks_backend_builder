<script setup lang="ts">
import SearchComponent from './components/SearchComponent.vue'
import { ref } from 'vue';

const currentProject = ref({ title: '', description: '', tags: [] });

const handleProjectSelect = (project) => {
  currentProject.value = project;
};
</script>

<template>
  <v-app>
    <v-main class="bg-gray-50">
      <v-container class="max-w-7xl mx-auto py-8">
        <SearchComponent @select="handleProjectSelect" />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* Any custom styles can go here */
</style>
