<template>
  <el-row>
    <h2 class="total-stats__heading">Общая статистика</h2>
  </el-row>
  <el-row class="roral-stats__content">
    <stats-element
      heading="Создано"
      :state="$options.ACTIVE_TASK"
    ></stats-element>
    <stats-element
      heading="Завершено"
      :state="$options.COMPLETED_TASK"
    ></stats-element>
    <stats-element
      heading="Удалено"
      :state="$options.DELETED_TASK"
    ></stats-element>
  </el-row>
</template>

<script>
import StatsElement from "./StatsElement.vue";

export default {
  name: "total-stats",

  components: { StatsElement },

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,
};
</script>

<style scoped lang="sass"></style>
