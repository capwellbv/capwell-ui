<template>
  <div class="cap-ui cap-text-wrapper" :class="[`cap-text-${size}`, `${transform}`, `${font}`]" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CapText',
  props: {
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
      default: 'normal'
    }
  }

}
</script>