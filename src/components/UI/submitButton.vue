<template>
  <button class="submit-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "submit-button",
};
</script>

<style scoped lang="sass">
.submit-button
  padding: 20px 30px
  background-color: #25e8e9

  font-size: 24px
  color: #0f0f0f

  border: none
  border-radius: 50px

  cursor: pointer
  &:hover
    background-color: #23c9de
    color: #f4f4f4
</style>
