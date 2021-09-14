<template>
  <cap-on-click-away :do="hide">
    <div class="cap-ui cap-select">
      <button
        @click="show"
        aria-haspopup="listbox"
        @keyup.tab="show"
        @keydown.tab="hide"
        @keyup.esc="hide"
        @keydown.enter.prevent="handleEnter"
        @keydown.down.prevent="handleArrowDown"
        @keydown.up.prevent="handleArrowUp"
      >
        <span v-if="value" class="label">{{ label }}</span>
        <span :class="{ chosen: value }" class="text">
          {{ buttonText }}
        </span>
        <x-icon
          v-if="value"
          class="icon remove-icon"
          @click="remove" size="16"
        >
        </x-icon>
        <chevron-down-icon v-else size="20" class="icon"></chevron-down-icon>
      </button>
      <ul v-show="showOptions" role="listbox" tabindex="-1">
        <li>
          <span>{{ placeholder }}</span>
          <chevron-up-icon @click="hide" size="20" class="icon"></chevron-up-icon>
        </li>
        <li
          @keyup.enter="select(i)"
          v-for="(option, i) in options"
          :key="i"
          @click="select(i)"
          :class="{ 'active': i === activeItemIndex, 'selected': selectedIndex === i }"
          role="option"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </cap-on-click-away>
</template>

<script>
import CapOnClickAway from "./CapOnClickAway";
import { ChevronDownIcon, ChevronUpIcon, XIcon } from "vue-feather-icons";
export default {
  name: "CapSelect",
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
      default: null,
    },
    placeholder: {
      type: String,
      default: "Select option",
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
      activeItemIndex: 0,
      selectedIndex: null
    };
  },
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    CapOnClickAway,
    XIcon
  },
  mounted() {
    if (!this.value) return;
    const index = this.options.findIndex(option => option === this.value);
    this.selectedIndex = index
  },
  computed: {
    buttonText() {
      if (this.value) {
        return this.value;
      }
      return this.placeholder;
    },
  },
  methods: {
    remove() {
      this.selectedIndex = null;
      this.$emit("change", null)
    },
    show() {
      this.showOptions = true;
    },
    hide() {
      this.showOptions = false;
      this.activeItemIndex = 0;
    },
    select(i) {
      let value = this.options[i];
      if (this.selectedIndex === i) {
        this.selectedIndex = null
        value = null
      } else {
        this.selectedIndex = i
      }
      this.$emit("change", value);
      this.hide();
    },
    handleEnter() {
      if (!this.options.length || !this.showOptions) return
      this.select(this.activeItemIndex);
    },
    handleArrowDown() {
      if (!this.options.length || !this.showOptions) return
      if (this.activeItemIndex >= this.options.length - 1) {
        this.activeItemIndex = 0
      } else {
        this.activeItemIndex += 1
      }
    },
    handleArrowUp() {
      if (!this.options.length || !this.showOptions) return
      if (this.activeItemIndex === 0) {
        this.activeItemIndex = this.options.length - 1
      } else {
        this.activeItemIndex -= 1
      }
    },
  },
};
</script>