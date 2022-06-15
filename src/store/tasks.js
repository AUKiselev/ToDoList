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
      if (this.tasks) {
        return this.tasks.filter((task) => task.ready === ACTIVE_TASK);
      }
    },

    getCompletedTasks() {
      if (this.tasks) {
        return this.tasks.filter((task) => task.ready === COMPLETED_TASK);
      }
    },
  },

  actions: {
    async setTasks() {
      const tasksList = await getTasks();
      this.tasks = tasksList;
    },

    async removeTask(currentTaskID) {
      await deleteTask(currentTaskID).then(() => {
        this.setTasks();
      });
    },

    async addNewTask(ready = ACTIVE_TASK, title, userID) {
      console.log();
      await addTask(ready, title, userID).then(() => {
        this.setTasks();
      });
    },

    async toggleCompleteTask(currentTaskID, ready) {
      await doCompleteTask(currentTaskID, ready).then(() => {
        this.setTasks();
      });
    },

    async doEditTask(currentTaskID, title) {
      await editTask(currentTaskID, title).then(() => {
        this.setTasks();
      });
    },
  },
});
