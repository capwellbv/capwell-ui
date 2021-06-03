<template>
  <div class="cap-ui cap-tab-content" v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CapTabContent',
  props: {
    name: { required: true },
    selected: { default: false },
  },
  inject: ['addTab', 'removeTab'],
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.isActive = this.selected;
    this.addTab(this)
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeTab(this)
  }
}
</script>
