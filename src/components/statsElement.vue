<template>
  <h3 class="stats-element__heading">{{ heading }}</h3>
  <div class="stats-element__content">test</div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";
import { storeToRefs } from "pinia";

export default {
  name: "stats-element",

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

  setup() {
    const tasksStore = useTasksStore();
    const { tasksCount } = storeToRefs(tasksStore);

    return {
      tasksCount,
    };
  },

  //! РАЗОБРАТЬСЯ С ЕБУЧЕЙ РЕАКТИВнОСТЬЮ СТОРА

  props: {
    heading: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
