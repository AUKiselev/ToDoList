<template>
  <el-row>
    <total-stats></total-stats>
  </el-row>
  <el-row>
    <tasks-block></tasks-block>
  </el-row>
</template>

<script>
import TasksBlock from "@/components/TasksBlock.vue";
import TotalStats from "@/components/TotalStats.vue";
import { useTasksStore } from "@/store/tasks";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

export default {
  name: "todos-view",

  components: { TotalStats, TasksBlock },

  setup() {
    const tasksStore = useTasksStore();
    const { setTasks } = tasksStore;
    const userStore = useUserStore();
    const { accessToken } = storeToRefs(userStore);

    return { setTasks, accessToken };
  },

  mounted() {
    this.setTasks();
  },
};
</script>

<style scoped lang="sass">
.el-row + *
  margin-top: 30px
</style>
