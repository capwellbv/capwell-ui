<template>
  <div class="cap-heading-wrapper" :class="`cap-${type}-${size}`" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    type:{
      type: String,
      default: 'title'
    },
    size: {
      type: String,
      default: '1'
    }
  }

}
</script>

<style scoped lang="scss">
@import '../css/title.scss'
</style>