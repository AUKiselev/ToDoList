<template>
  <div class="total-stats__wrapper">
    <el-row>
      <h2 class="total-stats__heading">Общая статистика</h2>
    </el-row>
    <el-row class="toral-stats__content">
      <stats-element
        heading="Активно"
        :tasksCounter="getActiveTasks ? getActiveTasks.length : 0"
      ></stats-element>
      <stats-element
        heading="Завершено"
        :tasksCounter="getCompletedTasks ? getCompletedTasks.length : 0"
      ></stats-element>
    </el-row>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";
import StatsElement from "./StatsElement.vue";

export default {
  name: "total-stats",

  setup() {
    const tasksStore = useTasksStore();
    const { getActiveTasks, getCompletedTasks } = storeToRefs(tasksStore);

    return { getActiveTasks, getCompletedTasks };
  },

  components: { StatsElement },
};
</script>

<style scoped lang="sass">
.total-stats__wrapper
  padding: 20px
  max-width: 600px
  margin: 0 0 0 auto
  display: flex
  flex-direction: column
  row-gap: 20px

  background-color: $white
  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08)

  border-radius: 10px

.toral-stats__content
  display: flex
  justify-content: space-between
</style>
