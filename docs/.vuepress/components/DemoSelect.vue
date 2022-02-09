<template>
  <div>
    <cap-select
      style="margin-top: 20px; z-index: 2;"
      v-model="selectdValue"
      :options="items"
      label="Select skills"
    >
    </cap-select>
    <cap-select
      style="margin-top: 20px; z-index: 1;"
      v-model="selectdValue2"
      :options="items2"
      label="Select skills"
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
      selectdValue2: "",
      items: [
        "Dot NET ontwikkelaars",
        "Biztalk Consultants",
        "Ruby On Rails Developers",
        "Javascript Specialisten",
        "Vue Specialistens",
      ],
      items2: [
        "Dot NET ontwikkelaars",
        "Biztalk Consultants",
        "Ruby On Rails Developers",
        "Javascript Specialisten",
        "Vue Specialistens",
        "Dot NET ontwikkelaars",
        "Biztalk Consultants",
        "Ruby On Rails Developers",
        "Javascript Specialisten",
        "Vue Specialistens"
      ],
    };
  },
};
</script>
