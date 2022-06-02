<template>
  <add-or-edit-task-modal
    v-model:isOpen="modalIsOpen"
    :task="task"
  ></add-or-edit-task-modal>
  <div class="task-element__wrapper">
    <el-checkbox
      class="task-element__checkbox"
      :checked="isTaskCompleted"
      ref="taskCompleteCheckbox"
      @click="changeCompletingTask"
    />
    <span class="task-element__content"> {{ task.title }}</span>
    <el-button
      class="task-element__edit-button"
      title="Изменить"
      @click="modalIsOpen = true"
    >
      <el-icon>
        <Edit style="width: 18px; height: 18px; color: #282846"
      /></el-icon>
    </el-button>
    <el-button
      class="task-element__delete-button"
      title="Удалить"
      @click="deleteCurrentTask"
    >
      <el-icon
        ><Delete style="width: 18px; height: 18px; color: #f05454"
      /></el-icon>
    </el-button>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import AddOrEditTaskModal from "./AddOrEditTaskModal.vue";

export default {
  name: "task-element",

  setup() {
    const tasksStore = useTasksStore();
    const { removeTask, toggleCompleteTask } = tasksStore;

    return { removeTask, toggleCompleteTask };
  },

  components: { AddOrEditTaskModal },

  ACTIVE_TASK: false,
  COMPLETED_TASK: true,

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  emits: {
    "update:taskState": null,
  },

  computed: {
    isTaskCompleted() {
      if (this.task.ready === this.$options.COMPLETED_TASK) {
        return true;
      }
      return false;
    },
  },

  data() {
    return { modalIsOpen: false };
  },

  methods: {
    changeCompletingTask() {
      if (this.task.ready === this.$options.ACTIVE_TASK) {
        this.toggleCompleteTask(this.task.id, this.$options.COMPLETED_TASK);
      } else if (this.task.ready === this.$options.COMPLETED_TASK) {
        this.toggleCompleteTask(this.task.id, this.$options.ACTIVE_TASK);
      }
    },

    deleteCurrentTask() {
      this.removeTask(this.task.id);
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
  column-gap: 10px

  background-color: #FFFFFF
  border: 1px solid rgba(40, 40, 70, 0.1)
  border-radius: 10px

// Animations-style start
.task-element__wrapper:hover
  border: 1px solid rgba(40, 40, 70, 0.3)
  transition: border 0.4s

.task-element__wrapper:hover .task-element__checkbox,
.task-element__wrapper:hover .task-element__edit-button,
.task-element__wrapper:hover .task-element__delete-button
  visibility: visible
  opacity: 1

.task-element__checkbox,
.task-element__edit-button,
.task-element__delete-button
  visibility: hidden
  opacity: 0
  transition: opacity 0.4s, visibility 0.4s !important
// Animations-style end

.task-element__checkbox
  width: 20px
  height: 20px

  border: 1px solid #29A19C
  border-radius: 4px

  cursor: pointer

.task-element__checkbox.is-checked
  background-image: url("@/assets/img/sprites/checkbox__is-checked.svg")
  background-repeat: no-repeat
  background-position: center

.el-checkbox__original
  position: relative
  z-index: -1
  opacity: 0

.task-element__content
  font-family: "Nunito"
  font-weight: 400
  font-size: 14px
  line-height: 19px
  color: #282846

.task-element__edit-button
  margin-left: auto

.task-element__edit-button, .task-element__delete-button
  padding: 0 !important
  height: 18px
  width: 18px

  background-color: #FFFFFF !important

  border-radius: 0 !important

  &:active
    border: none !important

  &:focus
    border: none !important
</style>
