<template>
  <div>
    <cap-multi-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      size="large"
    >
    </cap-multi-select>

    <cap-multi-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
    >
    </cap-multi-select>

    <cap-multi-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      size="small"
    >
    </cap-multi-select>
  </div>
</template>

<script>
export default {
  name: "MultiSelect",
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
