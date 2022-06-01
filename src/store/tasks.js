import { defineStore } from "pinia";
import { getTasks, deleteTask } from "@/api/task";

const ACTIVE_TASK = 0;
const COMPLETED_TASK = 1;

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
  }),

  getters: {
    // getActiveTasks(state) {
    //   return state.tasks.filter((task) => {
    //     task.taskState == ACTIVE_TASK;
    //   });
    // },

    // getCompletedTasks(state) {
    //   return state.tasks.filter((task) => {
    //     task.taskState == COMPLETED_TASK;
    //   });
    // },

    getActiveTasks() {
      return this.tasks.filter((value) => value.taskState === ACTIVE_TASK);
    },

    getCompletedTasks() {
      return this.tasks.filter((value) => value.taskState === COMPLETED_TASK);
    },

    getTasksList(state) {
      return (currentTaskState) =>
        state.tasks.filter((task) => task.taskState === currentTaskState);
    },

    getTasksCounter(state) {
      return (currentTaskState) =>
        state.tasks.filter((task) => task.taskState === currentTaskState)
          .length;
    },
  },

  actions: {
    async setTasks() {
      const tasksList = await getTasks();
      this.tasks = tasksList;
      console.log(this.tasks);
    },

    addNewTask(taskText) {
      this.tasks.push({
        taskText,
        id: this.tasks.length++,
        taskState: ACTIVE_TASK,
      });
    },

    async removeTask(currentTaskID) {
      await deleteTask(currentTaskID);
      // this.tasks.filter((task) => task != currentTask);
    },
  },
});
