<template>
  <add-or-edit-task-modal v-model:isOpen="modalIsOpen"></add-or-edit-task-modal>
  <div class="wrapper">
    <el-row>
      <main-header @openModal="doOpenModal"></main-header>
    </el-row>
    <el-row>
      <router-view />
    </el-row>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import AddOrEditTaskModal from "@/components/AddOrEditTaskModal.vue";

export default {
  name: "App",

  components: {
    MainHeader,
    AddOrEditTaskModal,
  },

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
  background-color: $gray-background

.el-row + *
  margin-top: 30px
</style>
