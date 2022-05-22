<template>
  <el-row>
    <el-button @click="showModal" ref="newTaskModal"> Новая задача </el-button>
  </el-row>
</template>

<script>
import { useTasksStore } from "@/store/tasks";

export default {
  name: "main-header",

  setup() {
    const tasksStore = useTasksStore();

    return { tasksStore };
  },

  emits: {
    openModal: null,
  },

  methods: {
    showModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style scoped lang="sass"></style>
