<template>
  <div>
    <div>
      <p>Simple Model Small</p>
      <CapButton varient="secondary" size="xl" @click="smShowModel = true"
        >Show modal</CapButton
      >
      <CapModal
        :show="smShowModel"
        @close="smShowModel = false"
        title="model title"
        size="sm"
      >
        <cap-text size="6">lorem ipsum</cap-text>
      </CapModal>
    </div>
    <div>
      <p>Simple Model Medium</p>
      <CapButton varient="secondary" size="xl" @click="mdShowModel = true"
        >Show modal</CapButton
      >
      <CapModal
        :show="mdShowModel"
        @close="mdShowModel = false"
        title="model title"
        size="md"
      >
        <cap-text size="6">lorem ipsum</cap-text>
      </CapModal>
    </div>
    <div>
      <p>Simple Model Large</p>
      <CapButton varient="secondary" size="xl" @click="lgShowModel = true"
        >Show modal</CapButton
      >
      <CapModal
        :show="lgShowModel"
        @close="lgShowModel = false"
        title="model title"
        size="lg"
      >
        <cap-text size="6">lorem ipsum</cap-text>
      </CapModal>
    </div>
    <div>
      <p>Form Model</p>
      <CapButton varient="secondary" size="xl" @click="show = true"
        >Show modal</CapButton
      >
      <CapModal :show="show" @close="show = false" size="lg">
        <cap-form>
          <cap-form-row>
            <cap-title type="heading" size="8">
              User Registration Form
            </cap-title>
          </cap-form-row>
          <cap-form-row>
            <cap-title type="subheading" size="3">Search*</cap-title>
            <cap-input
              style="width: 60%"
              placeholder="enter value"
              size="small"
            >
              <template #icon>
                <search-icon size="1.2x" class="icon"></search-icon>
              </template>
            </cap-input>
          </cap-form-row>
          <cap-form-row>
            <cap-title type="subheading" size="3">Search*</cap-title>
            <cap-input
              style="width: 60%"
              placeholder="enter value"
              size="small"
            >
              <template #icon>
                <search-icon size="1.2x" class="icon"></search-icon>
              </template>
            </cap-input>
          </cap-form-row>
          <cap-form-row>
            <cap-title type="subheading" size="3">Select*</cap-title>
            <cap-select
              style="width: 60%"
              v-model="selectdValue"
              :options="items"
              placeholder="Search skills"
              label="Search skills"
              size="small"
            >
            </cap-select>
          </cap-form-row>
          <cap-form-row>
            <cap-title type="subheading" size="3">Select*</cap-title>
            <cap-select
              style="width: 60%"
              v-model="selectdValue"
              :options="items"
              placeholder="Search skills"
              label="Search skills"
              size="small"
            >
            </cap-select>
          </cap-form-row>
          <cap-form-row style="justify-content: flex-end">
            <cap-button @click="handleSubmit" varient="secondary" size="md"
              >Submit</cap-button
            >
          </cap-form-row>
        </cap-form>
      </CapModal>
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";
export default {
  name: "Modal",
  data() {
    return {
      show: false,
      smShowModel: false,
      mdShowModel: false,
      lgShowModel: false,
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
  components: { SearchIcon },
  methods: {
    handleSubmit() {
      alert("submit button clicked!");
      this.show = !this.show;
    },
  },
};
</script>
