<template>
  <cap-input
    v-model="value"
    placeholder="default input"
  ></cap-input>
</template>

<script>
export default {
  name: "DemoInput",
  data() {
    return {
      value: "",
    };
  },
};
</script>
