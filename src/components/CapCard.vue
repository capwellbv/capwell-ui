<template>
  <div
    :style="style"
    :class="[
      'cap-card',
      `cap-card-${size}`,
      { bordered: bordered, nopadding: nopadding, fluid: fluid, clickable: clickable },
    ]"
    class="cap-ui"
  >
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapCard",
  props: {
    size: {
      type: String,
      default: "medium",
    },
    maxHeight: { type: String },
    fluid: { type: Boolean, default: false},
    clickable: { type: Boolean, default: false },
    bordered: { type: Boolean, default: false },
    nopadding: { type: Boolean, default: false },
  },

  computed: {
    style() {
      if (this.maxHeight) {
          return `max-height: ${this.maxHeight}; overflow: auto;`
        }

        return ''
    }
  }
};
</script>
