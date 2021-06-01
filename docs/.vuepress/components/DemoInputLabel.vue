<template>
  <cap-input-label
    v-model="value"
    placeholder="placeholder"
    label="Input Label"
  ></cap-input-label>
</template>

<script>
export default {
  name: "DemoInputLabel",
  data() {
    return {
      value: "",
    };
  },
};
</script>
