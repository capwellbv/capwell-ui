<template>
  <div class="cap-ui cap-heading-wrapper" :class="[`cap-${type}-${size}`, `${transform}`, `${font}`]" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CapTitle',
  props: {
    type:{
      type: String,
      default: 'title'
    },
    size: {
      type: String,
      default: '1'
    },
    transform: {
      type: String,
      default: 'initial'
    },
    font: {
      type: String,
      default: 'medium'
    }
  }
}
</script>