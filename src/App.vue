<template>
  <div class="wrapper">
    <el-row>
      <el-button> Новая задача </el-button>
    </el-row>
    <el-row>
      <total-stats></total-stats>
    </el-row>
    <el-row>
      <tasks-block></tasks-block>
    </el-row>
  </div>
</template>

<script>
import TasksBlock from "./components/tasksBlock.vue";
import TotalStats from "./components/totalStats.vue";

export default {
  name: "App",

  components: { TotalStats, TasksBlock },
};
</script>

<style lang="sass">
.wrapper
  padding: 20px 70px

.el-row + *
  margin-top: 30px

.el-button
  padding: 10px 25px
  background-color: #29A19C

  font-family: "Nunito"
  font-size: 16px
  font-weight: 600
  line-height: 22px
  color: #FAFAFA

  border: none
  border-radius: 8px
</style>
