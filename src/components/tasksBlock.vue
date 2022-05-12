<template>
  <task-list heading="Активные задачи"></task-list>
  <task-list heading="Завершенные задачи"></task-list>
</template>

<script>
import taskList from "@/components/tasksList.vue";

export default {
  name: "tasks-block",

  components: { taskList },
};
</script>

<style></style>
