<template>
  <Dialog 
    :visible="visible" 
    @update:visible="$emit('update:visible', $event)"
    :modal="true" 
    :style="{ width: '90vw', maxWidth: '1200px' }" 
    :closable="false"
  >
    <div class="content-card">
      <Button icon="pi pi-times" class="close-button" @click="$emit('update:visible', false)" text />
      <div class="card-header">
        <h1>{{ project.title }}</h1>
        <div class="tags">
          <Chip v-for="tag in project.tags" :key="tag" :label="tag" class="mr-2" />
        </div>
      </div>

      <div class="detail-content">
        <div class="description">
          <h2>Description</h2>
          <p>{{ project.description }}</p>
        </div>

        <div class="project-info">
          <div class="info-section">
            <h2>Project Details</h2>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Difficulty:</span>
                <span class="value">
                  <Rating :modelValue="project.difficulty" :readonly="true" :cancel="false" />
                </span>
              </div>
              <div class="info-item">
                <span class="label">Dimensions:</span>
                <span class="value">{{ project.dimensions }}</span>
              </div>
              <div class="info-item">
                <span class="label">Start Date:</span>
                <span class="value">{{ project.startDate }}</span>
              </div>
              <div class="info-item">
                <span class="label">End Date:</span>
                <span class="value">{{ project.endDate }}</span>
              </div>
            </div>
          </div>

          <div class="info-section">
            <h2>Materials</h2>
            <div class="materials">
              <Chip v-for="material in project.materials" :key="material" :label="material" class="mr-2" severity="info" />
            </div>
          </div>

          <div class="info-section">
            <h2>Progress</h2>
            <div class="progress-info">
              <ProgressBar :value="project.projectProgress.progression" :showValue="true" />
              <span class="status" :class="project.projectProgress.status.toLowerCase()">
                {{ project.projectProgress.status }}
              </span>
            </div>
          </div>
        </div>

        <div class="gallery" v-if="project.imageUrls.length > 0">
          <h2>Gallery</h2>
          <div class="image-grid">
            <img v-for="(url, index) in project.imageUrls" 
                 :key="index" 
                 :src="url" 
                 :alt="'Project image ' + (index + 1)"
                 class="gallery-image"
                 @click="openLightbox(index)" />
          </div>
        </div>

        <div class="other-projects" v-if="project.otherProjects && project.otherProjects.length > 0">
          <h2>Other Projects</h2>
          <div class="other-projects-grid">
            <div v-for="otherProject in project.otherProjects" 
                 :key="otherProject.id" 
                 class="other-project-card"
                 @click="handleOtherProjectClick(otherProject)">
              <img :src="otherProject.image_url" :alt="otherProject.title" class="other-project-image" />
              <div class="other-project-info">
                <h3>{{ otherProject.title }}</h3>
                <ProgressBar :value="otherProject.progression" :showValue="true" />
                <Rating :modelValue="otherProject.difficulty" :readonly="true" :cancel="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog'
import ProgressBar from 'primevue/progressbar'
import Rating from 'primevue/rating'
import Chip from 'primevue/chip'
import Button from 'primevue/button'

const props = defineProps<{
  project: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    difficulty: number;
    dimensions: string;
    startDate: string;
    endDate: string;
    materials: string[];
    projectProgress: {
      status: string;
      progression: number;
    };
    imageUrls: string[];
    otherProjects?: Array<{
      id: string;
      title: string;
      progression: number;
      difficulty: number;
      image_url: string;
    }>;
  } | null;
  visible: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
}>();

const openLightbox = (index: number) => {
  // TODO: Implement lightbox functionality
  console.log('Open image at index:', index);
};

const handleOtherProjectClick = (project: any) => {
  // TODO: Implement navigation to other project
  console.log('Navigate to project:', project.id);
};
</script>

<style scoped>
.content-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  color: #333;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
}

.card-header h1 {
  margin: 0;
  color: #333;
  font-size: 2em;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}

.detail-content {
  display: grid;
  gap: 30px;
}

.description {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.description h2 {
  margin: 0 0 15px 0;
  color: #333;
}

.description p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.project-info {
  display: grid;
  gap: 20px;
}

.info-section {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.info-section h2 {
  margin: 0 0 15px 0;
  color: #333;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.label {
  color: #666;
  font-size: 14px;
}

.value {
  color: #333;
  font-weight: 500;
}

.materials {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.progress-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.status {
  font-weight: 500;
  text-transform: capitalize;
}

.status.completed {
  color: #4CAF50;
}

.status.in_progress {
  color: #FFA726;
}

.status.finished {
  color: #4CAF50;
}

.gallery {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.gallery h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.other-projects {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.other-projects h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.other-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.other-project-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.other-project-card:hover {
  transform: translateY(-2px);
}

.other-project-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.other-project-info {
  padding: 15px;
}

.other-project-info h3 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 1.1em;
}

:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon) {
  color: #FFA726;
}

:deep(.p-progressbar .p-progressbar-value) {
  background: #4CAF50;
}

:deep(.p-progressbar) {
  background: #e9ecef;
  border-radius: 6px;
  height: 1rem;
}
</style> 