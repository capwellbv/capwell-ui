<template>
  <div :class="['cap-ui', 'cap-input cap-label-input', { 'has-error': error }]">
    <label
      v-if="label"
      class="outer-label"
      :class="{ active: focused || prefiled }"
    >
      {{ label }}
    </label>
    <div class="input-container-wrapper">
      <div
        class="cap-input-label-container"
        :class="[{ disabled: disabled, rounded: rounded }, size]"
      >
        <label
          v-if="label"
          class="label"
          :class="{ active: focused || prefiled }"
        >
          {{ label }}
        </label>
        <input
          @input="handleInput"
          @focus="focus"
          @blur="blur"
          :type="type"
          :value="value"
          :disabled="disabled"
          class="input-label"
          v-bind="$attrs"
          ref="input"
          :placeholder="placeholder"
        />
        <slot name="icon"></slot>
      </div>
      <template v-if="error">
        <span class="error">{{ error }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapInputLabel",
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: "Type value...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
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
    handleInput(e) {
      this.$emit("input", e.target.value);
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
