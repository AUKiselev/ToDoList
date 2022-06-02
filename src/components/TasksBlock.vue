<template>
  <div class="tasks-block__wrapper">
    <el-row>
      <task-list
        heading="Активные задачи"
        :filtredTasksList="getActiveTasks"
      ></task-list>
    </el-row>
    <el-row>
      <task-list
        heading="Завершенные задачи"
        :filtredTasksList="getCompletedTasks"
      ></task-list>
    </el-row>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
import TaskList from "@/components/TasksList.vue";

export default {
  name: "tasks-block",

  setup() {
    const tasksStore = useTasksStore();
    // const { getActiveTasks, getCompletedTasks } = tasksStore;
    const { tasks, getActiveTasks, getCompletedTasks } =
      storeToRefs(tasksStore);

    return { tasks, getActiveTasks, getCompletedTasks };
  },

  components: { TaskList },
};
</script>

<style scoped lang="sass">
.tasks-block__wrapper
  padding: 20px
  max-height: 50vh
  display: flex
  flex-direction: column
  row-gap: 20px

  background-color: #FFFFFF
  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08)

  border-radius: 10px

  overflow-y: auto
</style>
