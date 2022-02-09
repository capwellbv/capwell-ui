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
              @click.prevent="show"
              @input="show"
              @keyup.tab="show"
              @keydown.tab="hide"
              @keyup.esc="hide"
              @keydown.enter.prevent="handleEnter"
              @keydown.down.prevent="handleArrowDown"
              @keydown.up.prevent="handleArrowUp"
            />
          </div>
          <div class="icon-wrapper">
            <x-icon
              v-if="values.length"
              class="icon remove-icon"
              @click="clear" size="20"
            >
            </x-icon>
            <chevron-down-icon
              v-else
              @click="showOptions = !showOptions"
              size="20"
              class="icon icon-feather"
            >
            </chevron-down-icon>
          </div>
        </div>
        <ul role="listbox" tabindex="-1" v-if="showOptions" :style="`max-height: ${maxHeight}px;`">
          <li
            role="option"
            @click="select(option)"
            v-for="(option, i) in filteredOptions"
            :key="i"
            :class="{'selected': values.includes(option), 'active': activeItemIndex === i }"
          >
            <div v-html="getHtml(option)"></div>
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
    maxHeight: {
      type: [String, Number],
      default: '385'
    },
  },

  data() {
    return {
      searchQuery: null,
      showOptions: false,
      values: [],
      activeItemIndex: 0
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
      this.$emit('onFilterChange', value)
      if (!value) return
      this.activeItemIndex = 0
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
      this.activeItemIndex = 0;
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
    getHtml(option) {
      if (!this.searchQuery) return option
      const escapeRegexCharacters = s => s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      const regex = new RegExp(this.searchQuery.replace(/[^a-z\s\d]/gi, '').split().map(escapeRegexCharacters).join('[^a-z\s\d]*'), "gi");
      return option.replace(regex, "<b>$&</b>");
    },
    handleEnter() {
      if (!this.filteredOptions.length || !this.showOptions || !this.filteredOptions[this.activeItemIndex]) return
      this.select(this.filteredOptions[this.activeItemIndex]);
    },
    handleArrowDown() {
      if (!this.filteredOptions.length || !this.showOptions) return
      if (this.activeItemIndex >= this.filteredOptions.length - 1) {
        this.activeItemIndex = 0
      } else {
        this.activeItemIndex += 1
      }
    },
    handleArrowUp() {
      if (!this.filteredOptions.length || !this.showOptions) return
      if (this.activeItemIndex === 0) {
        this.activeItemIndex = this.filteredOptions.length - 1
      } else {
        this.activeItemIndex -= 1
      }
    },
    clear() {
      this.values = []
      this.$emit("change", this.values);
    }
  },
};
</script>
