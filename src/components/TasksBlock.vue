<template>
  <div class="tasks-block__wrapper">
    <el-row>
      <task-list
        heading="Активные задачи"
        :state="$options.ACTIVE_TASK"
      ></task-list>
    </el-row>
    <el-row>
      <task-list
        heading="Завершенные задачи"
        :state="$options.COMPLETED_TASK"
      ></task-list>
    </el-row>
  </div>
</template>

<script>
import TaskList from "@/components/TasksList.vue";

export default {
  name: "tasks-block",

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

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
