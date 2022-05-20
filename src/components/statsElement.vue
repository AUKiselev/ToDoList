<template>
  <div class="stats-element__wrapper">
    <h3 class="stats-element__heading">{{ heading }}</h3>
    <div class="stats-element__content">
      <div class="stats-element__circle-wrapper">
        <p class="stats-element__counter">
          {{ tasksCounter }}
        </p>
        <p class="stats-element__addition">задач</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useTasksStore } from "@/store/tasks";

export default {
  name: "stats-element",

  DELETED_TASK: -1,
  ACTIVE_TASK: 0,
  COMPLETED_TASK: 1,

  setup() {
    const tasksStore = useTasksStore();

    const { tasks, getTasksCounter } = tasksStore;

    return { tasks, getTasksCounter };
  },

  props: {
    heading: {
      type: String,
      required: true,
    },

    state: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      tasksCounter: 0,
    };
  },

  mounted() {
    this.tasksCounter = this.getTasksCounter(this.state);
  },

  watch: {
    tasks: {
      handler() {
        this.tasksCounter = this.getTasksCounter(this.state);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="sass">
.stats-element__wrapper
  display: flex
  flex-direction: column
  align-items: center
  row-gap: 10px

  font-family: "Nunito"

.stats-element__heading
  font-weight: 600
  font-size: 12px
  line-height: 16px
  color: #282846


.stats-element__circle-wrapper
  height: 100px
  width: 100px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  border: 1px solid #29A19C
  border-radius: 200px

.stats-element__counter
  font-weight: 600
  font-size: 36px
  line-height: 49px
  letter-spacing: 0.02em
  color: #29A19C

.stats-element__addition
  font-weight: 400
  font-size: 12px
  line-height: 16px
  color: #282846
</style>
