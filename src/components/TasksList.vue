<template>
  <h2>{{ heading }}</h2>
  <div class="tasks-list__content">
    <task-element
      v-for="task in filtredTasksList"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
import TaskElement from "@/components/TaskElement.vue";

export default {
  name: "tasks-list",

  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

  setup() {
    const tasksStore = useTasksStore();
    const { setTasks } = tasksStore;
    const { tasks } = storeToRefs(tasksStore);

    return { tasks, setTasks };
  },

  components: { TaskElement },

  props: {
    heading: {
      type: String,
      required: true,
    },

    filtredTasksList: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    this.setTasks();
  },
};
</script>

<style lang="sass">
.tasks-list__content
  display: flex
  flex-direction: column
  row-gap: 10px
</style>
