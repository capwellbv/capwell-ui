<template>
  <cap-floating-label-textarea
    v-model="value"
    placeholder="placeholder"
    label="Floating Textarea label"
  ></cap-floating-label-textarea>
</template>

<script>
import CapFloatingLabelTextarea from '../../../src/components/CapFloatingLabelTextarea.vue';
export default {
  name: "DemoTextareaLabel",
  components: { CapFloatingLabelTextarea },
  data() {
    return {
   value: "",
    };
  },
};
</script>
