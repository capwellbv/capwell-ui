<template>
  <div>
    <cap-search-able-multi-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      placeholder="Search skills"
      size="large"
    >
    </cap-search-able-multi-select>

    <cap-search-able-multi-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      placeholder="Search skills"
      rounded="true"
    >
    </cap-search-able-multi-select>

    <cap-search-able-multi-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      placeholder="Search skills"
      size="small"
    >
    </cap-search-able-multi-select>
  </div>
</template>

<script>
export default {
  name: "SearchAbleMultiSelect",
  data() {
    return {
      selectdValue: "",
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
