<template>
  <div>
    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
    >
    </cap-select>
  </div>
</template>

<script>
export default {
  name: "DemoSelect",
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
