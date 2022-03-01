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
        <cap-text size="6" font="300">lorem ipsum</cap-text>
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
        <cap-text size="6" font="300">lorem ipsum</cap-text>
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
        <cap-text size="6" font="300">lorem ipsum</cap-text>
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
            <cap-title tag="h5" font="500" class="mb-0">
              User Registration Form
            </cap-title>
          </cap-form-row>
          <cap-form-row>
            <cap-title tag="label" type="subheading" size="2" font="500">Search*</cap-title>
            <cap-input
              style="width: 60%"
              placeholder="Enter value"
              size="large"
            >
              <template #icon>
                <search-icon size="1.2x" class="icon"></search-icon>
              </template>
            </cap-input>
          </cap-form-row>
          <cap-form-row>
            <cap-title tag="label" type="subheading" size="2" font="500">Search*</cap-title>
            <cap-input
              style="width: 60%"
              placeholder="Enter value"
              size="large"
            >
              <template #icon>
                <search-icon size="1.2x" class="icon"></search-icon>
              </template>
            </cap-input>
          </cap-form-row>
          <cap-form-row>
            <cap-title tag="label" type="subheading" size="2" font="500">Select*</cap-title>
            <cap-select
              style="width: 60%"
              v-model="selectdValue"
              :options="items"
              placeholder="Search skills"
              label="Search skills"
            >
            </cap-select>
          </cap-form-row>
          <cap-form-row>
            <cap-title tag="label" type="subheading" size="2" font="500">Select*</cap-title>
            <cap-select
              style="width: 60%"
              v-model="selectdValue"
              :options="items"
              placeholder="Search skills"
              label="Search skills"
            >
            </cap-select>
          </cap-form-row>
          <cap-form-row>
            <cap-title tag="label" type="subheading" size="2" font="500">Remarks</cap-title>
            <cap-textarea
              style="width: 60%"
              v-model="textarea"
              placeholder="Explain a question?"
            >
            </cap-textarea>
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
  name: "DemoModal",
  data() {
    return {
      textarea: '',
      show: false,
      smShowModel: false,
      mdShowModel: false,
      lgShowModel: false,
      showWizard: false,
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
