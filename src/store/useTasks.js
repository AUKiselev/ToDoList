import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      outstandingTasks: [],
      completedTasks: [],
    };
  },

  actions: {
    deleteTaskFromList(task, taskList = []) {
      if (taskList.includes(task)) {
        taskList = taskList.filter((t) => t != task);
      }
    },

    addNewTask(task) {
      this.outstandingTasks.push(task);
    },

    completeTask(task) {
      this.deleteTaskFromList(task, this.outstandingTasks);
      this.completedTasks.push(task);
    },

    removeFromCompletedTasks(task) {
      this.deleteTaskFromList(task, this.completedTasks);
      this.completedTasks.push(task);
    },

    deleteTaskFromStore(task) {
      this.$state.forEach((taskList) => {
        this.deleteTaskFromList(task, taskList);
      });
    },
  },
});
