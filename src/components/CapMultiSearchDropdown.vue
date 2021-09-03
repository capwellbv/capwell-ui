<template>
  <div class="cap-ui cap-multi-search-dropdown">
    <cap-on-click-away :do="hide">
      <div class="searchable-select" :class="{ active: showOptions }">
        <div class="select-container" :class="{ rounded }">
          <div class="select-items">
            <span v-for="value in values" :key="value"
              >{{ value }}
              <x-icon @click="select(value)" size="16" class="icon"></x-icon
            ></span>
            <input
              ref="searchInput"
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
          </div>
          <chevron-down-icon
            @click="showOptions = !showOptions"
            size="20"
            class="icon-feather"
          >
          </chevron-down-icon>
        </div>
        <ul role="listbox" tabindex="-1" v-if="showOptions">
          <li
            role="option"
            @click="select(option)"
            v-for="(option, i) in filteredOptions"
            :key="i"
            :class="{'selected': values.includes(option)}"
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
import { ChevronDownIcon, XIcon } from "vue-feather-icons";
import CapOnClickAway from "./CapOnClickAway.vue";

export default {
  name: "CapMultiSearchDropdown",
  components: {
    ChevronDownIcon,
    CapOnClickAway,
    XIcon,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    options: {
      type: Array,
      required: true,
    },

    value: {
      type: Array,
      default: [],
    },

    placeholder: {
      type: String,
      required: true,
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
      values: [],
    };
  },

  created() {
    if (this.value.length) {
      this.value.forEach((val) => {
        const item = this.options.find((option) => option === val);
        if (item) this.addSelected(item)
      });
    }
  },

  watch: {
    searchQuery(value) {
      if (!value) return
      if (value === this.value) return
      if (!this.showOptions) this.show()
      this.$emit('onFilterChange', value)
    },
    value(val) {
      this.values = val
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
      this.addSelected(option);
      this.$emit("change", this.values);
      this.searchQuery = "";
      this.$refs.searchInput.focus();
    },

    addSelected(value) {
      if (!this.values.includes(value)) {
        this.values.push(value);
	    	return;
      }
      let index = this.values.indexOf(value);
      this.values.splice(index, 1);
    },
  },
};
</script>
