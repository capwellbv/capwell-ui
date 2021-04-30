<template>
  <div>
    <cap-multi-search-dropdown
      style="margin-top: 20px"
      v-model="skills"
      :options="items"
      placeholder="Search skills"
      size="large"
    >
    </cap-multi-search-dropdown>

    <cap-multi-search-dropdown
      style="margin-top: 20px"
      v-model="skills"
      :options="items"
      placeholder="Search skills"
      rounded="true"
    >
    </cap-multi-search-dropdown>

    <cap-multi-search-dropdown
      style="margin-top: 20px"
      v-model="preSelectedSkills"
      :options="items"
      placeholder="Search skills"
      size="small"
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
