<template>
  <div class="cap-ui cap-accordian">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'CapAccordian',
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  }
};
</script>