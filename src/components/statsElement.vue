<template>
  <h3 class="stats-element__heading">{{ heading }}</h3>
  <div class="stats-element__content">{{ tasksCounter }}</div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";

export default {
  name: "stats-element",

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

  setup() {
    const tasksStore = useTasksStore();

    const { tasks, getTasksCounter } = tasksStore;

    return { tasks, getTasksCounter };
  },

  props: {
    heading: {
      type: String,
      required: true,
    },

    state: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      tasksCounter: 0,
    };
  },

  mounted() {
    this.tasksCounter = this.getTasksCounter(this.state);
  },

  watch: {
    tasks: {
      handler() {
        this.tasksCounter = this.getTasksCounter(this.state);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
