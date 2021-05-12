<template>
  <div>
    <CapButton varient="secondary" size="xl" @click="showModel = true">
      Show modal
    </CapButton>
    <CapModal
      :show="showModel"
      @close="showModel = false"
      size="lg"
    >
      <cap-tabs prev-button-text="Get on" next-button-text="Get on" finish-button-text="Request hourly rate">
        <template v-slot:header="{ activeIndex, totalTabs }">
          REQUEST HOURLY RATE - STEP {{ activeIndex + 1 }}/{{ totalTabs }}
        </template>
        <cap-tab-pane name="Step one" :selected="true">
          <cap-form>
            <cap-form-row>
              <cap-title type="heading" size="3" font="bold">
                What kind of profile are you looking for
              </cap-title>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Function*</cap-text>
              <cap-search-dropdown
                v-model="functions"
                :options="items"
                placeholder="Search for functions"
                size="large"
              >
              </cap-search-dropdown>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Level*</cap-text>
              <cap-search-dropdown
                v-model="level"
                :options="items"
                placeholder="Choose level of IT specialist"
                size="large"
              >
              </cap-search-dropdown>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Experience</cap-text>
              <cap-select
                v-model="experience"
                :options="items"
                placeholder="Years of experience"
                label="Years of experience"
                size="large"
              ></cap-select>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Hiring period *</cap-text>
              <cap-select
                v-model="period"
                :options="items"
                placeholder="Duration of hiring"
                label="Duration of hiring"
                size="large"
              ></cap-select>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Effort*</cap-text>
              <cap-select
                v-model="effort"
                :options="items"
                placeholder="Deployment per week"
                label="Deployment per week"
                size="large"
              ></cap-select>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Place*</cap-text>
              <cap-input
                placeholder="Place name"
                v-model="place"
                size="large"
              >
              </cap-input>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Remarks</cap-text>
              <cap-textarea
                v-model="remarks"
                placeholder="Explanation or question"
              ></cap-textarea>
            </cap-form-row>
          </cap-form>
        </cap-tab-pane>
        <cap-tab-pane name="Step two">
          <cap-form>
            <cap-title type="heading" size="3" font="bold">
              How can we reach you?
            </cap-title>
            <cap-text size="7">Sample text of explanation subpart form. Nunc incidunt convallis eros, ultrices lacinia tellus mattis a Nunc tincidunt.</cap-text>
            <cap-form-row>
              <cap-text font="bold" size="7">Organization*</cap-text>
              <cap-input
                v-model="organization"
                placeholder="name organization"
                size="large"
              >
              </cap-input>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Full name*</cap-text>
              <cap-input
                v-model="fullname"
                placeholder="First and last name"
                size="large"
              >
              </cap-input>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Function*</cap-text>
              <cap-input
                v-model="designation"
                placeholder="Your function"
                size="large"
              >
              </cap-input>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">Telephone number*</cap-text>
              <cap-input
                v-model="phone"
                placeholder="telephone number"
                size="large"
              >
              </cap-input>
            </cap-form-row>
            <cap-form-row>
              <cap-text font="bold" size="7">E-mail address*</cap-text>
              <cap-input
                v-model="email"
                placeholder="E-mail address"
                size="large"
              >
              </cap-input>
            </cap-form-row>
          </cap-form>
        </cap-tab-pane>
      </cap-tabs>
    </CapModal>
  </div>
</template>

<script>
export default {
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
