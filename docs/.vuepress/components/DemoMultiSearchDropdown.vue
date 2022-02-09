<template>
  <div>
    <cap-multi-search-dropdown
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
