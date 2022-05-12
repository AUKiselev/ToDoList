<template>
  <h3 class="stats-element__heading">{{ heading }}</h3>
  <div class="stats-element__content"></div>
</template>

<script>
export default {
  name: "stats-element",

  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
