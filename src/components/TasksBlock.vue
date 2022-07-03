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
  <a href="https://cupteam.com.ua/" target="_blank" class="design-link"
    >Design by CupTeam</a
  >
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
import TaskList from "@/components/TasksList.vue";

export default {
  name: "tasks-block",

  setup() {
    const tasksStore = useTasksStore();
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

  background-color: $white
  box-shadow: $wrapper-box-shadow

  border-radius: 10px

  overflow-y: auto

.design-link
  position: relative
  top: 10px
  left: 10px
  font-family: $nunito
  font-size: $fz14
  font-weight: $fw400
  color: $main-text-color
  &:focus
    outline: none
</style>
