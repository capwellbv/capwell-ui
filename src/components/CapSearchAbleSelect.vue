<template>
  <div class="cap-search-able-select">
    <cap-on-click-away :do="hide">
      <div class="searchable-select" :class="{ active: showOptions }">
        <div class="select-container" :class="[size, { rounded }]">
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="placeholder"
            class="input"
            aria-haspopup="listbox"
            @click="show"
            @keyup.tab="show"
            @keydown.tab="hide"
            @keyup.esc="hide"
          />
          <chevron-down-icon
            v-if="!showOptions"
            @click="showOptions != showOptions"
            size="1.5x"
            class="icon"
          ></chevron-down-icon>
          <chevron-up-icon
            v-if="showOptions"
            @click="showOptions != showOptions"
            size="1.5x"
            class="icon"
          ></chevron-up-icon>
        </div>
        <ul role="listbox" tabindex="-1" v-if="showOptions">
          <li
            role="option"
            @click="select(option)"
            v-for="(option, i) in filteredOptions"
            :key="i"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </cap-on-click-away>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from "vue-feather-icons";
import CapOnClickAway from "./CapOnClickAway.vue";

export default {
  name: "CapSearchAbleSelect",
  components: {
    ChevronDownIcon,
    ChevronUpIcon,
    CapOnClickAway,
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
    value: String,
    placeholder: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "medium",
    },
    rounded: {
      type: [Boolean, String],
      default: false,
    },
  },

  data() {
    return {
      searchQuery: null,
      showOptions: false,
    };
  },

  created() {
    if (this.value) {
      const item = this.options.find((option) => option === this.value);
      if (item) this.searchQuery = item;
    }
  },

  watch: {
    searchQuery(value) {
      if (!value) return;

      if (value === this.value) return;

      if (!this.showOptions) this.show();
    },
  },

  computed: {
    filteredOptions() {
      if (this.searchQuery) {
        return this.options.filter((option) =>
          option.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return this.options;
    },
  },

  methods: {
    show() {
      this.showOptions = true;
    },

    hide() {
      this.showOptions = false;
    },

    select(option) {
      this.searchQuery = option;
      this.$emit("input", option.value);
      this.hide();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../css/searchableselect.scss";
</style>
