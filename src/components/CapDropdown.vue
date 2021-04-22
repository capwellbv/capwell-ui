<template>
  <div class="cap-dropdown">
    <div class="btn-wrapper" @click="handleDropdown" >
      <span>{{text}}</span>
       <chevron-down-icon size="1.5x" class="custom-class"></chevron-down-icon>
    </div>
    <div v-if="menu" class="content-wrapper">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  name: 'CapDropdown',
  data() {
    return {
      showMenu: false
    }
  },
  props: {
    text: {
      type: String,
      require: true
    },
    menu: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ChevronDownIcon
  },
  methods: {
    handleDropdown() {
      this.$emit('handle-menu', !this.menu)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../css/dropdown.scss'
</style>