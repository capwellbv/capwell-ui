<template>
  <cap-textarea-label
    v-model="value"
    placeholder="placeholder"
    label="Textarea label"
  ></cap-textarea-label>
</template>

<script>
import CapTextareaLabel from '../../../src/components/CapTextareaLabel.vue';
export default {
  name: "DemoTextareaLabel",
  components: { CapTextareaLabel },
  data() {
    return {
      value: "",
    };
  },
};
</script>
