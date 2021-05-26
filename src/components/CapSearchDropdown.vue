<template>
  <div class="cap-ui cap-search-dropdown">
    <cap-on-click-away :do="hide">
      <div class="searchable-select" :class="{ active: showOptions }">
        <div class="select-container" :class="{ rounded, 'active': showOptions }">
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
          <x-icon 
            v-show="value && showRemoveIcon" 
            class="icon remove-icon"
            @click="remove" size="1.5x"
          >
          </x-icon>
          <chevron-down-icon
            v-if="!showOptions"
            @click="show"
            size="20"
            class="icon"
          ></chevron-down-icon>
          <chevron-up-icon
            v-if="showOptions"
            @click="hide"
            size="20"
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
          <p v-if="filteredOptions.length <= 0" class="no-reults-found">No results found</p>
        </ul>
      </div>
    </cap-on-click-away>
  </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon, XIcon } from "vue-feather-icons";
import CapOnClickAway from "./CapOnClickAway.vue";

export default {
  name: "CapSearchDropdown",
  components: {
    XIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    CapOnClickAway,
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      required: true,
    },
    rounded: {
      type: [Boolean, String],
      default: false,
    },
    showRemoveIcon : {
      type: Boolean,
      default: true
    }
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
      if (!value) return
      if (value === this.value) return
      if (!this.showOptions) this.show()
      this.$emit('onFilterChange', value)
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
      this.$emit("change", option);
      this.hide();
    },

    remove() {
      this.searchQuery = null
      this.$emit('change', null)
    }
  },
};
</script>
