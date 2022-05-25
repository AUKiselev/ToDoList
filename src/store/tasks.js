import { defineStore } from "pinia";

const DELETED_TASK = -1;
const ACTIVE_TASK = 0;
const COMPLETED_TASK = 1;

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      { taskText: "test1", id: 0, taskState: ACTIVE_TASK },
      { taskText: "test2", id: 1, taskState: ACTIVE_TASK },
      { taskText: "test3", id: 2, taskState: ACTIVE_TASK },
      { taskText: "test4", id: 3, taskState: DELETED_TASK },
      { taskText: "test5", id: 4, taskState: DELETED_TASK },
      { taskText: "test6", id: 5, taskState: DELETED_TASK },
      { taskText: "test7", id: 6, taskState: DELETED_TASK },
      { taskText: "test8", id: 7, taskState: COMPLETED_TASK },
      { taskText: "test9", id: 8, taskState: COMPLETED_TASK },
      { taskText: "test10", id: 9, taskState: COMPLETED_TASK },
      { taskText: "test11", id: 10, taskState: COMPLETED_TASK },
      { taskText: "test12", id: 11, taskState: COMPLETED_TASK },
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
