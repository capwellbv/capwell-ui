<template>
  <div>
    <p>Single Select</p>
    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      size="large"
    >
    </cap-select>

    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
    >
    </cap-select>

    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      size="small"
    >
    </cap-select>
    <p>Multi Select</p>
    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      size="large"
      multiple="true"
    >
    </cap-select>

    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      multiple="true"
    >
    </cap-select>

    <cap-select
      style="margin-top: 20px"
      v-model="selectdValue"
      :options="items"
      label="Search skills"
      size="small"
      multiple="true"
    >
    </cap-select>
  </div>
</template>

<script>
export default {
  name: "Select",
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
