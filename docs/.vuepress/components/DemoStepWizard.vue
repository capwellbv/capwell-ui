<template>
  <div class="multistep-wizard" style="margin-top: 20px">
    <CapButton varient="secondary" size="xl" @click="showModel = true">
      Show modal
    </CapButton>
    <CapModal :show="showModel" @close="showModel = false" size="lg">
      <cap-tabs
        class="tabs-wrapper"
        prev-button-text="Back"
        next-button-text="Next"
        finish-button-text="Request hourly rate"
      >
        <template v-slot:header="{ activeIndex, totalTabs }">
          <cap-title tag="h6" font="bold" type="subheading" size="2" class="request-template text-capwell-blue">
            REQUEST HOURLY RATE - STEP {{ activeIndex + 1 }}/{{ totalTabs }}
          </cap-title>
        </template>
        <cap-tab-content class="padding-0" name="Step one" :selected="true">
          <cap-form>
            <cap-title class="text-dark-blue modal-heading">
              What kind of profile are you looking for
            </cap-title>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Function*</cap-text>
              <div class="content-right">
                <cap-search-dropdown
                  v-model="functions"
                  :options="items"
                  placeholder="Search for functions"
                  style="z-index: 6;"
                ></cap-search-dropdown>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Level*</cap-text>
              <div class="content-right">
                <cap-search-dropdown
                  v-model="level"
                  :options="items"
                  placeholder="Choose level of IT specialist"
                  style="z-index: 5;"
                ></cap-search-dropdown>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Experience</cap-text>
              <div class="content-right">
                <cap-select
                  v-model="experience"
                  :options="items"
                  placeholder="Years of experience"
                  label="Years of experience"
                  style="z-index: 4;"
                ></cap-select>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Hiring period *</cap-text>
              <div class="content-right">
                <cap-select
                  v-model="period"
                  :options="items"
                  placeholder="Duration of hiring"
                  label="Duration of hiring"
                  style="z-index: 3;"
                ></cap-select>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Effort*</cap-text>
              <div class="content-right">
                <cap-select
                  v-model="effort"
                  :options="items"
                  placeholder="Deployment per week"
                  label="Deployment per week"
                  style="z-index: 2;"
                ></cap-select>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Place*</cap-text>
              <div class="content-right">
                <cap-input
                  placeholder="Place name"
                  v-model="place"
                  size="large"
                ></cap-input>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Remarks</cap-text>
              <div class="content-right">
                <cap-textarea
                  v-model="remarks"
                  placeholder="Explanation or question"
                ></cap-textarea>
              </div>
            </cap-form-row>
          </cap-form>
        </cap-tab-content>
        <cap-tab-content class="padding-0" name="Step two">
          <cap-form>
            <cap-title class="text-dark-blue modal-heading">
              How can we reach you?
            </cap-title>
            <cap-text size="para" class="modal-sub-heading" font="300">
              Sample text of explanation subpart form. Nunc incidunt convallis
              eros, ultrices lacinia tellus mattis a Nunc tincidunt.
            </cap-text>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Organization*</cap-text>
              <div class="content-right">
                <cap-input
                  v-model="organization"
                  placeholder="name organization"
                  size="large"
                ></cap-input>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Full name*</cap-text>
              <div class="content-right">
                <cap-input
                  v-model="fullname"
                  placeholder="First and last name"
                  size="large"
                ></cap-input>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Function*</cap-text>
              <div class="content-right">
                <cap-input
                  v-model="designation"
                  placeholder="Your function"
                  size="large"
                ></cap-input>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">Telephone number*</cap-text>
              <div class="content-right">
                <cap-input
                  v-model="phone"
                  placeholder="telephone number"
                  size="large"
                ></cap-input>
              </div>
            </cap-form-row>
            <cap-form-row class="row-flex">
              <cap-text font="bold" size="7" class="label">E-mail address*</cap-text>
              <div class="content-right">
                <cap-input
                  v-model="email"
                  placeholder="E-mail address"
                  size="large"
                ></cap-input>
              </div>
            </cap-form-row>
          </cap-form>
        </cap-tab-content>
      </cap-tabs>
    </CapModal>
  </div>
</template>

<script>
import CapText from '../../../src/components/CapText.vue'
export default {
  components: { CapText },
  name: 'DemoStepWizard',
  data() {
    return {
      showModel: false,
      remarks: '',
      place: '',
      effort: '',
      period: '',
      experience: '',
      level: '',
      functions: '',
      organization: '',
      fullname: '',
      designation: '',
      phone: '',
      email: '',
      items: [
        'Dot NET ontwikkelaars',
        'Biztalk Consultants',
        'Ruby On Rails Developers',
        'Javascript Specialisten',
        'Vue Specialistens',
      ],
    }
  },
}
</script>
<style>
.multistep-wizard .tabs-footer {
  margin-top: 40px;
}
</style>
<style scoped>
.content-right {
  width: 60%;
}
.row-flex {
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 0;
}
.padding-0 {
  padding: 0;
}
.modal-heading {
  margin-bottom: 30px;
}
.tabs-wrapper {
  padding: 40px 24px 24px;
}
.modal-sub-heading {
  margin-bottom: 60px;
  color: rgba(0,0,0,.8);
}
@media(max-width: 768px) {
  .tabs-wrapper {
    padding: 40px 4px 40px;
  }
  .content-right {
    width: 100%;
  }
  .row-flex {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }
  .row-flex .label {
    margin-bottom: 10px;
  }
  .modal-heading {
    margin-bottom: 15px;
  }
  .request-template {
    margin-bottom: 5px;
  }
  .modal-sub-heading {
    margin-bottom: 40px;
  }
}
</style>
