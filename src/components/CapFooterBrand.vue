<template>
  <div class="cap-ui cap-footer-brand">
    <slot>
      <img :src="src" :alt="altText">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CapFooterBrand',
  props: {
    src: {
      type: String,
      default: null,
    },
    altText: {
      type: String,
      default: null,
    },
  },
}
</script>