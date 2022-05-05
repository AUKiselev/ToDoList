<template>
  <div class="wrapper">
    <main-header></main-header>
    <div class="body-wrapper">
      <tasks-list heading="Outstanding tasks"></tasks-list>
    </div>
  </div>
</template>

<script>
import mainHeader from "./components/mainHeader.vue";
import TasksList from "./components/tasksList.vue";

export default {
  name: "App",
  components: { mainHeader, TasksList },
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
</style>
