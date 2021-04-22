<template>
    <div class="cap-input">
      <div class="cap-input-container" :class="[{'disabled': disabled, 'rounded': rounded}, size]">
        <input
          @input="handleInput"
          type="text"
          :value="value"
          :disabled="disabled"
          class="input-value"
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
  data() {
    return {
    inputValue: "",
    }
  },
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

  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    }
  }
};
</script>

<style scoped lang="scss">
@import "../css/input.scss"
</style>