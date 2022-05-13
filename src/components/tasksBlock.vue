<template>
  <div class="tasks-block__wrapper">
    <el-row>
      <task-list heading="Активные задачи"></task-list>
    </el-row>
    <el-row>
      <task-list heading="Завершенные задачи"></task-list>
    </el-row>
  </div>
</template>

<script>
import taskList from "@/components/tasksList.vue";

export default {
  name: "tasks-block",

  components: { taskList },
};
</script>

<style scoped lang="sass">
.tasks-block__wrapper
  padding: 20px
  display: flex
  flex-direction: column
  row-gap: 20px

  background-color: #FFFFFF
  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08)

  border-radius: 10px
</style>
