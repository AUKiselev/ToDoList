<template>
  <el-row>
    <h2 class="total-stats__heading">Общая статистика</h2>
  </el-row>
  <el-row class="roral-stats__content">
    <stats-element heading="Создано"></stats-element>
    <stats-element heading="Завершено"></stats-element>
    <stats-element heading="Удалено"></stats-element>
  </el-row>
</template>

<script>
import statsElement from "./statsElement.vue";

export default {
  name: "total-stats",

  components: { statsElement },
};
</script>

<style scoped lang="sass"></style>
