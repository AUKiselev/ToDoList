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
export default {
  name: "stats-element",

  props: {
    heading: {
      type: String,
      required: true,
    },

    tasksCounter: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="sass">
.stats-element__wrapper
  display: flex
  flex-direction: column
  align-items: center
  row-gap: 10px

  font-family: $nunito

.stats-element__heading
  font-weight: $fw600
  font-size: $fz12
  line-height: 16px
  color: $main-text-color


.stats-element__circle-wrapper
  height: 100px
  width: 100px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  border: 1px solid $main-elements-color
  border-radius: 200px

.stats-element__counter
  font-weight: $fw600
  font-size: $fz36
  line-height: 49px
  letter-spacing: 0.02em
  color: $main-elements-color

.stats-element__addition
  font-weight: $fw400
  font-size: $fz12
  line-height: 16px
  color: $main-text-color
</style>
