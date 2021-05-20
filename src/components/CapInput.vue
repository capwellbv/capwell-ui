<template>
    <div :class="['cap-ui', 'cap-input', {'has-error': error}]">
      <div class="cap-input-container" :class="[{'disabled': disabled, 'rounded': rounded}, size]">
        <input
          @input="handleInput"
          @focus="focus"
          @blur="blur"
          :type="type"
          :value="value"
          :disabled="disabled"
          class="input-field"
          v-bind="$attrs"
          ref="input"
          :placeholder="placeholder"
        />
        <slot name="icon"></slot>
      </div>
      <div v-if="error">
        <span class="error">{{ error }}</span>
      </div>
    </div>
</template>

<script>

export default {
  name: "CapInput",
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: "Type value..."
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: "text"
    },
    error: String
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    focus() {
      this.$emit("focus");
    },
    blur() {
      this.$emit("blur");
    },
  }
};
</script>