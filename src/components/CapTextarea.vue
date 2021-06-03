<template>
  <div :class="['cap-ui', 'cap-textarea-container', {'has-error': error}]">
    <textarea
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="focus"
      @blur="blur"
      v-bind="$attrs"
      :class="['cap-textarea', { disabled: disabled}]"
    ></textarea>
    <div v-if="error">
      <span class="error">{{ error }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapTextarea",
  inheritAttrs: false,
  data() {
    return {};
  },
  props: {
    placeholder: {
      type: String,
      default: "Type value...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: ''
    },
    error: String
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    focus() {
      this.$emit("focus");
    },
    blur() {
      this.$emit("blur");
    },
  },
};
</script>
