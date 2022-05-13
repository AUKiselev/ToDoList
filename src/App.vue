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
import tasksBlock from "./components/tasksBlock.vue";
import totalStats from "./components/totalStats.vue";
import mainHeader from "./components/mainHeader.vue";
import addTaskModal from "./components/addTaskModal.vue";

export default {
  name: "App",

  components: { totalStats, tasksBlock, mainHeader, addTaskModal },

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
  max-width: 1000px
  background-color: #E5E5E5

.el-row + *
  margin-top: 30px
</style>
