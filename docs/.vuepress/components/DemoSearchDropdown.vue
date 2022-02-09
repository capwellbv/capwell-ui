<template>
  <div>
    <h3 id="default">
      <a href="#default" class="header-anchor">#</a>
      Default
    </h3>
    <cap-search-dropdown
      v-model="selectdSkill"
      :options="items"
      placeholder="Search skills"
      style="z-index: 11;"
    >
    </cap-search-dropdown>
    </br>
    </br>
    </br>
    <h3 id="filters">
      <a href="#filters" class="header-anchor">#</a>
      Filters Variant
    </h3>
    <cap-search-dropdown
      v-model="selectdSkill1"
      :options="items"
      :icon-right="false"
      :show-on-focus="false"
      class="filter-jobs-options"
      placeholder="Search skills"
    >
      <template #prepend>
        <search-icon size="20" class="search-icon icon"></search-icon>
      </template>
    </cap-search-dropdown>
    </br>
    </br>
    </br>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  name: "DemoSearchDropdown",
  components: {
    SearchIcon
  },
  data() {
    return {
      selectdSkill1: null,
      selectdSkill: null,
      items: [
        "Dot NET ontwikkelaars",
        "Biztalk Consultants",
        "Ruby On Rails Developers",
        "Javascript Specialisten",
        "Vue Specialistens",
        "Dot NET ontwikkelaars",
        "Biztalk Consultants",
        "Ruby On Rails Developers",
        "Javascript Specialisten",
        "Vue Specialistens",
      ],
    };
  },
};
</script>

<style lang="scss">
.cap-ui {
  &.cap-search-dropdown {
    &.filter-jobs-options {
      .search-icon,
      .remove-icon {
        stroke-width: 3px;
      }
    }
  }
}
</style>
