<template>
  <component :is="tag" class="cap-ui cap-title" :class="[textVariant, textTransform, fontWeight, fontStyle]" >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'CapTitle',
  props: {
    type:{
      type: String,
      default: null
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
      default: '700'
    },
    textStyle: {
      type: String,
      default: 'normal'
    },
    tag: {
      type: String,
      default: 'h3',
    }
  },
  computed: {
    textVariant() {
      return this.type && `cap-${this.type}-${this.size}` || ''
    },
    textTransform() {
      return this.transform && `transform-${this.transform}` || ''
    },
    fontWeight() {
      return this.font && `font-${this.font}` || ''
    },
    fontStyle() {
      return this.textStyle && `font-style-${this.textStyle}` || ''
    }
  }
}
</script>