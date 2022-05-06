<template>
  <div class="wrapper">
    <div class="body-wrapper">
      <basic-button>Новая задача</basic-button>
      <tasks-list heading="Активные задачи"></tasks-list>
    </div>
  </div>
</template>

<script>
import TasksList from "./components/tasksList.vue";
import BasicButton from "./components/UI/basicButton.vue";

export default {
  name: "App",
  components: { TasksList, BasicButton },
};
</script>

<style lang="sass">
.wrapper
  padding: 20px 70px
</style>
