<template>
  <div class="cap-dropdown">
    <div class="cap-dropdown-trigger" @click="$emit('toggle', !show)">
      <slot name="trigger">
        <span>{{ text }}</span>
        <chevron-up-icon v-if="show" size="1.5x"></chevron-up-icon>
        <chevron-down-icon v-else size="1.5x"></chevron-down-icon>
      </slot>
    </div>
    <div v-show="show" class="cap-dropdown-content">
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from "vue-feather-icons";
export default {
  name: "CapDropdown",
  props: {
    text: {
      type: String,
      require: true,
    },
    show: { default: true, type: Boolean },
  },
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
  }
};
</script>

<style scoped lang="scss">
@import "../css/dropdown.scss";
</style>