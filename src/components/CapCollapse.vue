<template>
  <div :id="id" :class="['cap-ui cap-collapse', { 'shown': isActive }]">
    <div class="collapse-header-wrapper">
      <div @click="toggle" class="collapse-header">
        <slot name="header">
          <cap-title
            type="heading"
            size="8"
            font="bold"
            class="collapse-title"
            >{{ title }}</cap-title
          >
          <chevron-down-icon size="25" class="collapse-icon"></chevron-down-icon>
        </slot>
      </div>
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
		id: {
			type: String,
      default: null,
      required: true
		},
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
  mounted() {
    this.isActive = this.active
  },
  methods: {
    toggle() {
      if (
        this.$parent &&
        !this.$parent.multiple &&
        this.$parent.$el.classList.contains('cap-accordian')
      ) {
        this.$parent.$children.forEach((item, index) => {
          if (this.id == item.id) {
            this.isActive = !this.isActive
          } else {
            item.isActive = false
          }
        }) 
      } else {
        this.isActive = !this.isActive
      }
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