<template>
  <h2>{{ heading }}</h2>
  <div class="tasks-list__content">
    <task-element
      v-for="task in tasks"
      :key="task.id"
      :taskTitle="task.title"
      :taskId="task.id"
      v-model:taskState="task.ready"
    />
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
import TaskElement from "@/components/TaskElement.vue";

export default {
  name: "tasks-list",

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

  setup() {
    const tasksStore = useTasksStore();
    const { setTasks } = tasksStore;
    const { tasks, getTasksList } = storeToRefs(tasksStore);

    return { tasks, getTasksList, setTasks };
  },

  components: { TaskElement },

  props: {
    heading: {
      type: String,
      required: true,
    },

    state: {
      type: Boolean,
      required: true,
    },
  },

  mounted() {
    this.setTasks();
    console.log("i am too");
  },

  methods: {
    doCompleteTask() {
      this.tasks.find();
    },
  },

  // watch: {
  //   tasks: {
  //     handler() {
  //       this.tasksList = this.getTasksList(this.state);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style lang="sass">
.tasks-list__content
  display: flex
  flex-direction: column
  row-gap: 10px
</style>
