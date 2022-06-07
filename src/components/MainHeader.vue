<template>
  <el-row class="main-header">
    <el-button @click="showModal">Новая задача</el-button>
    <div class="user-block">
      <span class="user-block__username">Хорошего дня, %username%</span>
      <nav class="user-block__settings">
        <el-icon>
          <ArrowDown style="width: 18px; height: 18px; color: #29a19c"
        /></el-icon>
        <ul class="user-block__menu-list">
          <li class="user-block__menu-item">Настройки</li>
          <li class="user-block__menu-item">Выйти</li>
        </ul>
      </nav>
    </div>
  </el-row>
</template>

<script>
import { useTasksStore } from "@/store/tasks";

export default {
  name: "main-header",

  setup() {
    const tasksStore = useTasksStore();

    return { tasksStore };
  },

  emits: {
    openModal: null,
  },

  methods: {
    showModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style scoped lang="sass">
.main-header
  display: flex
  justify-content: space-between

.user-block
  display: flex

.user-block__username
  font-family: $nunito
  font-size: $fz16
  font-weight: $fw600
  line-height: 22px
  color: $main-text-color

.user-block__settings
  position: relative
  padding-left: 20px

  &:hover
    cursor: pointer

.user-block__settings:hover .user-block__menu-list
  visibility: visible
  opacity: 1

.user-block__menu-list
  padding: 20px
  position: absolute
  right: 0
  top: 40px
  display: flex
  flex-direction: column
  row-gap: 25px

  font-family: $montserrat
  font-size: $fz12
  line-height: 14px
  color: $main-text-color

  background-color: $white
  box-shadow: $wrapper-box-shadow
  border-radius: 10px
  list-style: none

  visibility: hidden
  opacity: 0
  transition: opacity 0.4s

.user-block__menu-item
  &:hover
    color: $main-elements-color
</style>
