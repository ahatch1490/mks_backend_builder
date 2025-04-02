<template>
  <div class="search-results-container">
    <!-- Search Results List -->
    <div v-if="results.length > 0" class="search-results">
      <div 
        v-for="result in results" 
        :key="result.id" 
        class="result-item"
        @click="selectProject(result)"
      >
        <h3>{{ result.title }}</h3>
        <p>{{ result.description }}</p>
        <div class="tags">
          <span v-for="tag in result.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <ProjectDetail :project="selectedProject" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '../stores/projectStore'
import type { Project } from '../stores/projectStore'
import ProjectDetail from './ProjectDetail.vue'

const props = defineProps<{
  results: Project[]
}>()

const projectStore = useProjectStore()
const selectedProject = computed(() => projectStore.selectedProject)

const selectProject = (project: Project) => {
  projectStore.setSelectedProject(project)
}

const closeModal = () => {
  projectStore.setSelectedProject(null)
}
</script>

<style scoped>
.search-results-container {
  position: relative;
}

.search-results {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-item {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.result-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.result-item h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.result-item p {
  margin: 0 0 15px 0;
  color: #666;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-button:hover {
  background-color: #f0f0f0;
  color: #333;
}
</style> 