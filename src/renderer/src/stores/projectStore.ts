import { defineStore } from 'pinia'

interface ProjectProgress {
  projectId: string
  status: string
  completedDate: string
  startDate: string
  progression: number
}

export interface Project {
  id: string
  title: string
  description: string
  imageUrls: string[]
  tags: string[]
  difficulty: number
  startDate: string
  endDate: string
  materials: string[]
  dimensions: string
  projectProgress: ProjectProgress
}

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [] as Project[],
    selectedProject: null as Project | null,
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    getProjectById: (state) => {
      return (id: string) => state.projects.find(p => p.id === id)
    },
    getFilteredProjects: (state) => {
      return (searchTerm: string) => {
        const term = searchTerm.toLowerCase()
        return state.projects.filter(project => 
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.tags.some(tag => tag.toLowerCase().includes(term))
        )
      }
    }
  },

  actions: {
    async fetchProjects() {
      this.isLoading = true
      this.error = null
      try {
        // For now, we'll import the data directly
        const data = await import('../data/data.json')
        this.projects = data.projectDetails
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch projects'
      } finally {
        this.isLoading = false
      }
    },

    setSelectedProject(project: Project | null) {
      this.selectedProject = project
    },

    async updateProject(projectId: string, updates: Partial<Project>) {
      const index = this.projects.findIndex(p => p.id === projectId)
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...updates }
        // Here we would typically make an API call to persist changes
        // await api.updateProject(projectId, updates)
      }
    },

    async addProject(project: Project) {
      this.projects.push(project)
      // Here we would typically make an API call to persist changes
      // await api.createProject(project)
    },

    async deleteProject(projectId: string) {
      this.projects = this.projects.filter(p => p.id !== projectId)
      if (this.selectedProject?.id === projectId) {
        this.selectedProject = null
      }
      // Here we would typically make an API call to persist changes
      // await api.deleteProject(projectId)
    }
  }
}) 