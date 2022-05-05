<template>
  <header class="main-header">
    <div class="main-header__add-task">
      <input
        class="main-header__task-text"
        type="text"
        placeholder="Write a new task"
      />
      <submit-button>Add task</submit-button>
    </div>
  </header>
</template>

<script>
import SubmitButton from "./UI/submitButton.vue";

export default {
  name: "main-header",
  components: { SubmitButton },
};
</script>

<style scoped lang="sass">
.main-header
  padding: 20px 40px
  background-color: #f0f0f0

  box-shadow: 0 2px 2px #c8c8c8

.main-header__add-task
  display: flex
  justify-content: center
  column-gap: 30px
</style>
