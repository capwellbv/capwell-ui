<template>
  <div>
    <cap-multi-search-dropdown
      style="margin-top: 20px"
      v-model="skills"
      :options="items"
      placeholder="Search skills"
    >
    </cap-multi-search-dropdown>
  </div>
</template>

<script>
export default {
  name: "DemoMultiSearchDropdown",
  data() {
    return {
      skills: [],
      preSelectedSkills: ['Dot NET ontwikkelaars', 'Biztalk Consultants'],
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
