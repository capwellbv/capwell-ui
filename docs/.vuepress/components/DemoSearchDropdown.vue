<template>
  <div>
    <cap-search-dropdown
      style="margin-top: 20px"
      v-model="skill"
      :options="items"
      placeholder="Search skills"
      size="large"
    >
    </cap-search-dropdown>

    <cap-search-dropdown
      style="margin-top: 20px"
      v-model="skill"
      :options="items"
      placeholder="Search skills"
      rounded="true"
    >
    </cap-search-dropdown>

    <cap-search-dropdown
      style="margin-top: 20px"
      v-model="selectdSkill"
      :options="items"
      placeholder="Search skills"
      size="small"
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
