import { defineStore } from "pinia";

// const DELETED_TASK = -1;
const ACTIVE_TASK = 0;
// const COMPLETED_TASK = 1;

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      { taskText: "test1", id: 1, taskState: 0 },
      { taskText: "test2", id: 2, taskState: 0 },
      { taskText: "test3", id: 3, taskState: 0 },
      { taskText: "test4", id: 4, taskState: -1 },
      { taskText: "test5", id: 5, taskState: -1 },
      { taskText: "test6", id: 6, taskState: -1 },
      { taskText: "test6", id: 6, taskState: -1 },
      { taskText: "test7", id: 7, taskState: 1 },
      { taskText: "test8", id: 8, taskState: 1 },
      { taskText: "test9", id: 9, taskState: 1 },
      { taskText: "test9", id: 9, taskState: 1 },
      { taskText: "test9", id: 9, taskState: 1 },
    ],
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
      this.tasks.push({
        taskText,
        id: this.tasks.length++,
        taskState: ACTIVE_TASK,
      });
    },

    removeTask(currentTask) {
      this.tasks.filter((task) => task != currentTask);
    },
  },
});
