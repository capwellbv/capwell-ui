<template>
    <div class="cap-input">
      <div class="cap-input-container" :class="[{'disabled': disabled, 'rounded': rounded}, size]">
        <input
          @input="$emit('input', event.target.value)"
          type="text"
          :value="value"
          :disabled="disabled"
          class="input-field"
          v-bind="$attrs"
          ref="input"
          :placeholder="placeholder"
        />
        <slot name="icon"></slot>
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
  }
};
</script>