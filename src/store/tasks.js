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
    async setTasks(accessToken) {
      const tasksList = await getTasks(accessToken);
      this.tasks = tasksList;
    },

    async removeTask(currentTaskID, accessToken) {
      await deleteTask(currentTaskID, accessToken).then(() => {
        this.setTasks(accessToken);
      });
    },

    async addNewTask(ready = ACTIVE_TASK, title, user, accessToken) {
      console.log(accessToken);
      await addTask(ready, title, user, accessToken).then(() => {
        this.setTasks(accessToken);
      });
    },

    async toggleCompleteTask(currentTaskID, ready, accessToken) {
      await doCompleteTask(currentTaskID, ready, accessToken).then(() => {
        this.setTasks(accessToken);
      });
    },

    async doEditTask(currentTaskID, title, accessToken) {
      await editTask(currentTaskID, title, accessToken).then(() => {
        this.setTasks(accessToken);
      });
    },
  },
});
