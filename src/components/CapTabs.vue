<template>
  <div class="cap-ui cap-tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :class="{ 'is-active': tab.isActive }"
          :key="index"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>


    <div class="cap-tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapTabs',
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name
      })
    },
  },
}
</script>
