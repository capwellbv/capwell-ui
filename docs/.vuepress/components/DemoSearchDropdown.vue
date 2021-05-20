<template>
  <div>
    <cap-search-dropdown
      style="margin-top: 20px"
      v-model="skill"
      :options="items"
      placeholder="Search skills"
    >
    </cap-search-dropdown>
  </div>
</template>

<script>
import CapSearchDropdown from '../../../src/components/CapSearchDropdown.vue';
export default {
  components: { CapSearchDropdown },
  name: "DemoSearchDropdown",
  data() {
    return {
      skill: "",
      selectdSkill: "Dot NET ontwikkelaars",
      items: [
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
