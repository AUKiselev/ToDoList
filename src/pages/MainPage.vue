<template>
  <add-task-modal v-model:isOpen="modalIsOpen"></add-task-modal>
  <div class="wrapper">
    <el-row>
      <main-header @openModal="doOpenModal"></main-header>
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
import TasksBlock from "@/components/TasksBlock.vue";
import MainHeader from "@/components/MainHeader.vue";
import AddTaskModal from "@/components/AddTaskModal.vue";
import TotalStats from "@/components/TotalStats.vue";

export default {
  name: "App",

  components: { TotalStats, TasksBlock, MainHeader, AddTaskModal },

  data() {
    return { modalIsOpen: false };
  },

  methods: {
    doOpenModal() {
      this.modalIsOpen = true;
    },
  },
};
</script>

<style scoped lang="sass">
.wrapper
  margin: 0 auto
  padding: 20px 70px
  width: 100vw
  height: 100vh
  background-color: #E5E5E5

.el-row + *
  margin-top: 30px
</style>
