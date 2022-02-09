<template>
  <div>
    <cap-multi-select
      v-model="skills"
      :options="items"
      label="Search skills"
    >
    </cap-multi-select>
  </div>
</template>

<script>
export default {
  name: "DemoMultiSelect",
  data() {
    return {
      skills: [],
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
