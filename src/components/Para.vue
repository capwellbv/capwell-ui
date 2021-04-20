<template>
  <div class="para-wrapper" :class="`para-${size}`" >
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
@import '../css/para.scss'
</style>