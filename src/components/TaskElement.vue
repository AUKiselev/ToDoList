<template>
  <div class="task-element__wrapper">
    <el-checkbox class="task-element__checkbox" />
    <span class="task-element__content"> {{ taskContent }}</span>
    <el-button class="task-element__edit-button"></el-button>
    <el-button class="task-element__delete-button"></el-button>
  </div>
</template>

<script>
export default {
  name: "task-element",

  props: {
    taskContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass">
.task-element__wrapper
  padding: 15px
  width: 100%
  display: flex
  justify-content: flex-start

  background-color: #FFFFFF
  border: 1px solid rgba(40, 40, 70, 0.1)
  border-radius: 10px

.task-element__checkbox::before
  content: ""
  width: 20px
  height: 20px
  position: absolute
  left: 15px
  top: 15px

  border: 1px solid #29A19C
  border-radius: 4px

.task-element__content
  font-family: "Nunito"
  font-weight: 400
  font-size: 14px
  line-height: 19px
  color: #282846

.task-element__edit-button
  margin-left: auto
</style>
