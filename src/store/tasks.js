import { defineStore } from "pinia";
import {
  getTasks,
  deleteTask,
  addTask,
  doCompleteTask,
  editTask,
} from "@/api/task";

const ACTIVE_TASK = false;
const COMPLETED_TASK = true;

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),

  getters: {
    getActiveTasks() {
      return this.tasks.filter((task) => task.ready === ACTIVE_TASK);
    },

    getCompletedTasks() {
      return this.tasks.filter((task) => task.ready === COMPLETED_TASK);
    },
  },

  actions: {
    async setTasks() {
      const tasksList = await getTasks();
      this.tasks = tasksList;
    },

    async removeTask(currentTaskID) {
      await deleteTask(currentTaskID);
      this.setTasks();
    },

    async addNewTask(ready = ACTIVE_TASK, title, user) {
      await addTask(ready, title, user);
      this.setTasks();
    },

    async toggleCompleteTask(currentTaskID, ready) {
      await doCompleteTask(currentTaskID, ready);
      this.setTasks();
    },

    async doEditTask(currentTaskID, title) {
      await editTask(currentTaskID, title);
      this.setTasks();
    },
  },
});
