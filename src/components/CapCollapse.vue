<template>
  <div :class="['cap-ui cap-collapse', { 'shown': isActive }]">
    <div @click="toggle" class="collapse-header">
      <slot name="header">
        <cap-title
          type="heading"
          size="8"
          font="bold"
          class="collapse-title"
          >{{ title }}</cap-title
        >
        <chevron-down-icon size="30" class="collapse-icon"></chevron-down-icon>
      </slot>
    </div>
    <transition
      name="collapse"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-if="isActive" class="collapse-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons';
import CapTitle from "./CapTitle.vue";

export default {
	name: 'CapCollapse',
	props: {
		title: {
			type: String,
			default: null,
		},
		active: {
			type: Boolean,
			default: false,
		}
  },
  components: {
    ChevronDownIcon,
    CapTitle
  },
  data() {
    return {
      isActive: false
    }
  },
  watch: {
    active(val) {
      this.isActive = val
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    
    endTransition(el) {
      el.style.height = ''
    }
  },
};
</script>