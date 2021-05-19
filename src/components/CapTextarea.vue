<template>
  <div :class="['cap-ui', 'cap-textarea-container', {'has-error': error}]">
    <textarea
      v-model="textarea"
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
    return {
      textarea: "",
    };
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
    error: String
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.textarea);
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
