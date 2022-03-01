<template>
  <component :is="tag" class="cap-ui cap-text-wrapper" :class="[textVariant, textTransform, fontStyle, fontWeight]" >
    <slot></slot>
  </component>
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
    },
    textStyle: {
      type: String,
      default: 'normal'
    },
    tag: {
      type: String,
      default: 'p',
    }
  },
  computed: {
    textVariant() {
      return this.size && `cap-text-${this.size}` || ''
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