<template>
  <div
    :class="[
      'cap-card',
      `cap-card-${size}`,
      { bordered: bordered, nopadding: nopadding },
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
  name: "Card",
  props: {
    size: {
      type: String,
      default: "medium",
    },
    bordered: { type: Boolean, default: false },
    nopadding: { type: Boolean, default: false },
  },
};
</script>
