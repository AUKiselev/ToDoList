import { defineStore } from "pinia";

const DELETED_TASK = -1;
const ACTIVE_TASK = 0;
const COMPLETED_TASK = 1;

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [],
      nextId: 0,
    };
  },

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
    addTask(taskText) {
      this.tasks.push({ taskText, id: this.nextId++, taskState: ACTIVE_TASK });
    },

    removeTask(currentTask) {
      this.tasks.filter((task) => task != currentTask);
    },
  },
});
