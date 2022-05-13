<template>
  <div class="modal" v-if="isOpen" @click="close">
    <div class="modal__content" @click.stop>
      <el-row>
        <h2 class="modal__heading">Добавить новую задачу</h2>
      </el-row>
      <el-row class="modal__main">
        <p class="modal__what-to-do">Что нужно сделать?</p>
        <el-input
          class="modal__input"
          v-model="taskName"
          placeholder="Название задачи"
        />
      </el-row>
      <el-row class="modal__footer">
        <el-button type="danger" @click="close">Отменить</el-button>
        <el-button>Добавить</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-task-modal",

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  emits: {
    "update:isOpen": null,
  },

  data() {
    return { taskName: "" };
  },

  methods: {
    close() {
      this.$emit("update:isOpen", false);
      this.taskName = "";
    },
  },
};
</script>

<style lang="sass">
.modal
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: rgba(0, 0, 0, 0.5)

  &__content
    margin: auto
    margin-top: 25vh
    padding: 20px
    min-height: 250px
    max-width: 700px

    display: flex
    flex-direction: column
    // justify-content: space-between

    background-color: #FFFFFF
    box-shadow: 0px 10px 25px rgba(29, 52, 54, 0.08)

    border-radius: 10px

  &__main
    margin-top: 30px

  &__what-to-do
    font-family: "Nunito"
    font-weight: 700
    font-size: 14px
    line-height: 19px
    color: #282846

.modal__input .el-input__inner
  padding: 8px 15px
  width: 100%
  height: 35px

  border: 1px solid rgba(40, 40, 70, 0.1)
  border-radius: 8px

.modal__what-to-do + *
  margin-top: 10px

.modal__footer
  margin-top: auto
  display: flex
  justify-content: space-between
</style>
