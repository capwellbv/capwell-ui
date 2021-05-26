<template>
  <div>
    <cap-search-dropdown
      style="margin-top: 20px"
      v-model="selectdSkill"
      :options="items"
      placeholder="Search skills"
    >
    </cap-search-dropdown>
  </div>
</template>

<script>
export default {
  name: "DemoSearchDropdown",
  data() {
    return {
      selectdSkill: null,
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
