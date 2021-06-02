<template>
  <cap-floating-label-input
    v-model="value"
    placeholder="placeholder"
    label="Input Label"
  ></cap-floating-label-input>
</template>

<script>
import CapFloatingLabelInput from '../../../src/components/CapFloatingLabelInput.vue';
export default {
  name: "DemoFloatingLabelInput",
  components: { CapFloatingLabelInput },
  data() {
    return {
      value: "",
    };
  },
};
</script>
