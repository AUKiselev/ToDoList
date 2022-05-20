<template>
  <el-row>
    <h2 class="total-stats__heading">Общая статистика</h2>
  </el-row>
  <el-row class="roral-stats__content">
    <stats-element heading="Создано" state="-1"></stats-element>
    <stats-element heading="Завершено" state="0"></stats-element>
    <stats-element heading="Удалено" state="1"></stats-element>
  </el-row>
</template>

<script>
import StatsElement from "./StatsElement.vue";

export default {
  name: "total-stats",

  components: { StatsElement },
};
</script>

<style scoped lang="sass"></style>
