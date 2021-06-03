<template>
  <div :class="['cap-ui', 'cap-input cap-floating-label-input', { 'has-error': error }]">
    <label
      v-if="label"
      class="floating-input-label"
      :class="{ active: focused || prefiled }"
    >
      {{ label }}
    </label>
    <cap-input :class="['floating-label-input', { 'has-value': prefiled}]" :value="value" :error="error" @focus="focus" @blur="blur" @input="handleInput" v-bind="$attrs"></cap-input>
  </div>
</template>

<script>
import CapInput from './CapInput.vue';
export default {
  inheritAttrs: false,
  name: "CapFloatingLabelInput",
  components: { CapInput },
  props: {
    value: {
      type: String,
      default: "",
    },
    error: String,
    label: String,
  },
  data() {
    return {
      focused: false,
    };
  },
  methods: {
    handleInput(val) {
      this.$emit("input", val);
    },
    focus() {
      this.focused = true;
      this.$emit("focus");
    },
    blur() {
      this.focused = false;
      this.$emit("blur");
    },
  },
  computed: {
    prefiled() {
      return this.value;
    },
  },
};
</script>
