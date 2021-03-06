<template>
  <div class="modal" v-if="isOpen" @click="close">
    <div class="modal__content" @click.stop>
      <el-row>
        <h2 v-if="isNewTask" class="modal__heading">Добавить новую задачу</h2>
        <h2 v-else-if="!isNewTask" class="modal__heading">Изменить задачу</h2>
      </el-row>
      <el-row class="modal__main">
        <p v-if="isNewTask" class="modal__what-to-do">Что нужно сделать?</p>
        <p v-else-if="!isNewTask" class="modal__what-to-do">Название задачи</p>
        <el-input
          class="modal__input"
          @keydown.enter="submitEventHandler"
          @keydown.esc="close"
          v-model="taskName"
          ref="addTaskInput"
          placeholder="Название задачи"
        />
      </el-row>
      <el-row class="modal__footer">
        <el-button type="danger" @click="close">Отменить</el-button>
        <el-button v-if="isNewTask" @click="addTask">Добавить</el-button>
        <el-button v-else-if="!isNewTask" @click="editTask">Изменить</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

export default {
  name: "add-or-edit-task-modal",

  setup() {
    const tasksStore = useTasksStore();
    const userStore = useUserStore();
    const { accessToken, userID } = storeToRefs(userStore);
    const { addNewTask, doEditTask } = tasksStore;

    return { accessToken, userID, addNewTask, doEditTask };
  },

  ACTIVE_TASK: false,
  COMPLETED_TASK: true,

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },

    task: {
      type: Object,
      required: false,
    },
  },

  emits: {
    "update:isOpen": null,
  },

  data() {
    return { taskName: "" };
  },

  computed: {
    isTaskNameCorrect() {
      return this.taskName != "";
    },

    isNewTask() {
      return !this.task;
    },
  },

  methods: {
    close() {
      this.$emit("update:isOpen", false);
      this.taskName = "";
    },

    addTask() {
      if (this.isTaskNameCorrect) {
        this.addNewTask(this.$options.ACTIVE_TASK, this.taskName, this.userID);
        this.close();
      }
    },

    editTask() {
      if (this.isTaskNameCorrect) {
        this.doEditTask(this.task?.id, this.taskName);
        this.close();
      }
    },

    submitEventHandler() {
      this.isNewTask ? this.addTask() : this.editTask();
    },
  },

  watch: {
    isOpen() {
      if (this.isOpen) {
        this.taskName = this.task?.title;
        setTimeout(() => {
          this.$refs.addTaskInput.focus();
        }, 0);
      }
    },
  },
};
</script>

<style lang="sass">
.modal
  position: fixed
  z-index: 5
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

    background-color: $white
    box-shadow: $wrapper-box-shadow

    border-radius: 10px

  &__main
    margin-top: 30px

  &__what-to-do
    font-family: $nunito
    font-weight: $fw700
    font-size: $fz14
    line-height: 19px
    color: $main-text-color

.modal__what-to-do + *
  margin-top: 10px

.modal__footer
  margin-top: auto
  display: flex
  justify-content: space-between
</style>
