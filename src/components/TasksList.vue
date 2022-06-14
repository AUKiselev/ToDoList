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
import { useUserStore } from "@/store/user";

export default {
  name: "tasks-list",

  ACTIVE_TASK: false,
  COMPLETED_TASK: true,

  setup() {
    const tasksStore = useTasksStore();
    const userStore = useUserStore();
    // const { accessToken } = userStore;
    const { setTasks } = tasksStore;
    const { accessToken } = storeToRefs(userStore);
    const { tasks } = storeToRefs(tasksStore);

    return { tasks, setTasks, accessToken };
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

  // mounted() {
  //   this.setTasks(this.accessToken);
  // },
};
</script>

<style lang="sass">
.tasks-list__content
  display: flex
  flex-direction: column
  row-gap: 10px
</style>
