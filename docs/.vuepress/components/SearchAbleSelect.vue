<template>
  <div>
    <cap-search-able-select
      style="margin-top: 20px"
      v-model="skill"
      :options="items"
      placeholder="Search skills"
      size="large"
    >
    </cap-search-able-select>

    <cap-search-able-select
      style="margin-top: 20px"
      v-model="skill"
      :options="items"
      placeholder="Search skills"
      rounded="true"
    >
    </cap-search-able-select>

    <cap-search-able-select
      style="margin-top: 20px"
      v-model="selectdSkill"
      :options="items"
      placeholder="Search skills"
      size="small"
    >
    </cap-search-able-select>
  </div>
</template>

<script>
export default {
  name: "SearchAbleSelect",
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
