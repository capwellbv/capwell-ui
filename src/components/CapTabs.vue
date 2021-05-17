<template>
  <div class="cap-ui cap-tabs">
    <div class="tabs-header" v-if="header">
      <slot name="header" v-bind="slotProps">
        <ul class="tabs-header-nav">
          <li
            class="tabs-header-nav-item"
            v-for="(tab, index) in tabs"
            :class="{ 'is-active': tab.isActive }"
            :key="tab.name"
            @click="changeTab(index)"
          >
            {{ tab.name }}
          </li>
        </ul>
      </slot>
    </div>
    <div class="cap-tabs-details">
      <slot v-bind="slotProps"></slot>
    </div>
    <div class="tabs-footer" v-if="footer">
      <div class="tabs-footer-left">
        <span @click="prevTab" v-if="currentActive > 0">
          <slot name="prev" v-bind="slotProps">
            <cap-button varient="secondary" size="lg">
              {{ prevButtonText }}
            </cap-button>
          </slot>
        </span>
      </div>
      <div class="tabs-footer-right">
        <span @click="nextTab" v-if="isLastTab">
          <slot name="finish" v-bind="slotProps">
            <cap-button varient="primary" size="lg">
              {{ finishButtonText }}
            </cap-button>
          </slot>
        </span>
        <span @click="nextTab" v-else>
          <slot name="next" v-bind="slotProps">
            <cap-button varient="secondary" size="lg">
              {{ nextButtonText }}
            </cap-button>
          </slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapTabs',
  props: {
    header: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: true,
    },
    nextButtonText: {
      type: String,
      default: 'Next',
    },
    prevButtonText: {
      type: String,
      default: 'Back',
    },
    finishButtonText: {
      type: String,
      default: 'Finish',
    },
  },
  provide() {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    }
  },

  data() {
    return {
      tabs: [],
      currentActive: 0,
    }
  },
  computed: {
    slotProps() {
      return {
        tabs: this.tabs,
        prevTab: this.prevTab,
        nextTab: this.nextTab,
        isLastTab: this.isLastTab,
        activeIndex: this.currentActive,
        totalTabs: this.totalTabs
      }
    },
    isLastTab() {
      return this.currentActive === this.totalTabs - 1
    },
    totalTabs() {
      return this.tabs.length
    },
  },
  methods: {
    addTab(tab) {
      const index = this.$slots.default.indexOf(tab.$vnode)
      this.tabs.splice(index, 0, tab)
    },
    removeTab(tab) {
      const tabs = this.tabs
      const index = tabs.indexOf(tab)
      if (index > -1) {
        if (index === this.currentActive) {
          this.changeTab(this.currentActive - 1)
        }
        if (index < this.currentActive) {
          this.currentActive = this.currentActive - 1
        }
        tabs.splice(index, 1)
      }
    },
    prevTab() {
      this.currentActive--
      this.changeTab(this.currentActive)
    },
    nextTab() {
      if (this.currentActive < this.totalTabs - 1) {
        this.currentActive++
        this.changeTab(this.currentActive)
      } else {
        this.$emit('complete')
      }
    },
    changeTab(index) {
      if (index >= 0 && index < this.totalTabs) {
        this.tabs.forEach((tab) => {
          tab.isActive = false
        })
        this.tabs[index].isActive = true
        this.currentActive = index
      } else {
        return
      }
    },
  },
}
</script>
