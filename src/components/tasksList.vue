<template>
  <h2>{{ heading }}</h2>
  <ul class="tasks-list">
    <li class="tasks-item"></li>
  </ul>
</template>

<script>
export default {
  name: "task-list",

  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="sass"></style>
