<template>
  <div class="cap-ui cap-text-wrapper" :class="`cap-text-${size}`" >
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
    }
  }

}
</script>