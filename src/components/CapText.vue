<template>
  <div class="cap-text-wrapper" :class="`cap-text-${size}`" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Para',
  props: {
    size: {
      type: String,
      default: '1'
    }
  }

}
</script>

<style scoped lang="scss">
@import '../css/text.scss'
</style>