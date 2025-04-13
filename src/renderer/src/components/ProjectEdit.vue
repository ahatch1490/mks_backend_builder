<script setup lang="ts">
import { ref } from "vue";

// Props for handling a project passed into this component
const props = defineProps({
  project: {
    type: Object as () => { id: number; name: string; description: string },
    required: true,
  },
});

const sliderValue = ref(5);
// Emit edited data back to parent if needed
const emit = defineEmits(["save", "cancel"]);

// Editable fields
const editableName = ref(props.project.name);
const editableDescription = ref(props.project.description);

// Methods to handle save and cancel actions
const saveChanges = (): void => {
  emit("save", {
    id: props.project.id,
    name: editableName.value,
    description: editableDescription.value,
  });
};

const cancelEdit = (): void => {
  // Reset the fields back to their original values
  editableName.value = props.project.name;
  editableDescription.value = props.project.description;
  emit("cancel");
};
</script>

<template>
  <div class="project-detail-edit">
    <h3>Edit Project</h3>
    <form class="space-y-4" @submit.prevent="saveChanges">
      <div>
        <label for="projectName" class="block font-medium">Project Name:</label>
        <input
          id="projectName"
          v-model="editableName"
          type="text"
          class="border rounded w-full p-2"
        />
      </div>

      <div>
        <label for="projectDescription" class="block font-medium"
          >Description:</label
        >
        <Editor
          id="projectDescription"
          v-model="editableDescription"
          class="border rounded w-full p-2"
        ></Editor>
      </div>

      <div>
        <label for="difficultyGroup" class="block font-medium"
          >Difficulty:</label
        >
        <Listbox
          id="difficultyGroup"
          :options="[1, 2, 3, 4, 5]"
          option-label="Level"
          class="w-full"
        />
      </div>

      <div class="flex justify-end space-x-4">
        <div>
          <label for="prioritySlider" class="block font-medium"
            >Priority:</label>
          <InputText v-model.number="slidervalue" />
          <Slider v-model="sliderValue" />
        </div>
        <button
          type="button"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          @click="cancelEdit"
        >
          Cancel
        </button>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.project-detail-edit {
  max-width: 600px;
  margin: auto;
}
</style>
