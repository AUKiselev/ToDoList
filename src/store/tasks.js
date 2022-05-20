import { defineStore } from "pinia";

// const DELETED_TASK = -1;
const ACTIVE_TASK = 0;
// const COMPLETED_TASK = 1;

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      { name: "test1", id: 1, taskState: 0 },
      { name: "test2", id: 2, taskState: 0 },
      { name: "test3", id: 3, taskState: 0 },
      { name: "test4", id: 4, taskState: -1 },
      { name: "test5", id: 5, taskState: -1 },
      { name: "test6", id: 6, taskState: -1 },
      { name: "test7", id: 7, taskState: 1 },
      { name: "test8", id: 8, taskState: 1 },
      { name: "test9", id: 9, taskState: 1 },
    ],
    nextId: 0,
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
    addNewTask(taskText) {
      this.tasks.push({ taskText, id: this.nextId++, taskState: ACTIVE_TASK });
    },

    removeTask(currentTask) {
      this.tasks.filter((task) => task != currentTask);
    },
  },
});
