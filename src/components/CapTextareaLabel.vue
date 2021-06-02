<template>
  <div :class="['cap-ui', 'cap-label-textarea', { 'has-error': error }]">
    <label
      class="label"
      :class="{ active: focused || prefiled }"
    >
      {{ label }}
    </label>
    <cap-textarea :class="['label-textarea', { 'has-value': prefiled}]" :error="error" :value="value" @focus="focus" @blur="blur" @input="handleInput" v-bind="$attrs"></cap-textarea>
  </div>
</template>

<script>
import CapTextarea from './CapTextarea.vue';
export default {
  inheritAttrs: false,
  name: "CapTextareaLabel",
  components: { CapTextarea },
  props: {
    placeholder: {
      type: String,
      default: "Type value...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Textarea Label"
    },
    value: {
      type: String,
      default: ''
    },
    error: String,
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
