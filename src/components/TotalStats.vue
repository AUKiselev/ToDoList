<template>
  <div class="total-stats__wrapper">
    <el-row>
      <h2 class="total-stats__heading">Общая статистика</h2>
    </el-row>
    <el-row class="toral-stats__content">
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
  </div>
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

<style scoped lang="sass">
.total-stats__wrapper
  padding: 20px
  display: flex
  flex-direction: column
  row-gap: 20px

  background-color: #FFFFFF
  box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08)

  border-radius: 10px

.toral-stats__content
  display: flex
  justify-content: space-between
</style>
