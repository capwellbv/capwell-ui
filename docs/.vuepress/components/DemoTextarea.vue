<template>
  <cap-textarea
    v-model="value"
    placeholder="placeholder"
  ></cap-textarea>
</template>

<script>

export default {
  name: "DemoTextarea",
  data() {
    return {
      value: "",
    };
  },
};
</script>
