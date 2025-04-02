<template>
  <div class="project-detail">
    <!-- Header -->
    <div class="header">
      <h1>{{ project.title }}</h1>
      <span class="status" :class="project.projectProgress.status.toLowerCase()">{{ project.projectProgress.status }}</span>
    </div>

    <!-- Description -->
    <div class="section">
      <h2>Description</h2>
      <p>{{ project.description }}</p>
    </div>

    <!-- Project Info -->
    <div class="section">
      <h2>Project Information</h2>
      <div class="info-grid">
        <div class="info-item">
          <label>Start Date</label>
          <span>{{ project.startDate }}</span>
        </div>
        <div class="info-item">
          <label>End Date</label>
          <span>{{ project.endDate }}</span>
        </div>
        <div class="info-item">
          <label>Difficulty</label>
          <span>{{ project.difficulty }}/5</span>
        </div>
        <div class="info-item">
          <label>Dimensions</label>
          <span>{{ project.dimensions }}</span>
        </div>
      </div>
    </div>

    <!-- Materials -->
    <div class="section">
      <h2>Materials</h2>
      <div class="materials-list">
        <span v-for="material in project.materials" :key="material" class="material-tag">
          {{ material }}
        </span>
      </div>
    </div>

    <!-- Progress -->
    <div class="section">
      <h2>Project Progress</h2>
      <div class="progress-info">
        <div class="progress-bar">
          <div 
            class="progress-fill"
            :style="{ width: `${project.projectProgress.progression}%` }"
          ></div>
        </div>
        <div class="progress-details">
          <span>Status: {{ project.projectProgress.status }}</span>
          <span v-if="project.projectProgress.completedDate">
            Completed: {{ project.projectProgress.completedDate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  tags: string[];
  difficulty: number;
  startDate: string;
  endDate: string;
  materials: string[];
  dimensions: string;
  projectProgress: {
    projectId: string;
    status: string;
    completedDate: string;
    startDate: string;
    progression: number;
  };
}

defineProps<{
  project: Project;
}>();
</script>

<style scoped>
.project-detail {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  margin: 0;
  color: #333;
}

.status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.status.completed {
  background-color: #e6f4ea;
  color: #1e7e34;
}

.status.in-progress {
  background-color: #e3f2fd;
  color: #1976d2;
}

.status.finished {
  background-color: #e6f4ea;
  color: #1e7e34;
}

.section {
  margin-bottom: 30px;
}

.section h2 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-item label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.info-item span {
  font-size: 16px;
  color: #333;
}

.materials-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.material-tag {
  padding: 6px 12px;
  background-color: #f8f9fa;
  border-radius: 16px;
  font-size: 14px;
  color: #666;
}

.progress-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.progress-bar {
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #10b981;
  transition: width 0.3s ease;
}

.progress-details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}
</style> 