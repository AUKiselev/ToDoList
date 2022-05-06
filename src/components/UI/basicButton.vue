<template>
  <button class="basic-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "basic-button",
};
</script>

<style scoped lang="sass">
.basic-button
  padding: 10px 25px
  background-color: #29A19C

  font-size: 16px
  color: #FAFAFA

  border: none
  border-radius: 8px

  cursor: pointer
  transition: background-color 0.2s, color 0.2s, border 0.2s
  &:hover
    background-color: #FAFAFA
    color: #29A19C
    border: 1px solid #29A19C
</style>
