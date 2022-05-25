<template>
  <h2>{{ heading }}</h2>
  <div class="tasks-list__content">
    <task-element
      v-for="task in tasksList"
      :key="task.id"
      :taskContent="task.taskText"
      v-model:taskState="task.taskState"
    />
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import TaskElement from "@/components/TaskElement.vue";

export default {
  name: "tasks-list",

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

  setup() {
    const tasksStore = useTasksStore();
    const { tasks, getTasksList } = tasksStore;

    return { tasks, getTasksList };
  },

  components: { TaskElement },

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

  mounted() {
    this.tasksList = this.getTasksList(this.state);
  },

  data() {
    return { tasksList: [] };
  },

  methods: {
    doCompleteTask() {
      this.tasks.find();
    },
  },

  watch: {
    tasks: {
      handler() {
        this.tasksList = this.getTasksList(this.state);
      },
      deep: true,
    },
  },
};
</script>

<style lang="sass">
.tasks-list__content
  display: flex
  flex-direction: column
  row-gap: 10px
</style>
