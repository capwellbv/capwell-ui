<template>
  <cap-on-click-away :do="hide">
    <div class="cap-multi-select cap-ui">
      <button
        @click="toggle"
        aria-haspopup="listbox"
        @keyup.tab="show"
        @keydown.tab="hide"
        @keyup.esc="hide"
        @keydown.enter.prevent="handleEnter"
        @keydown.down.prevent="handleArrowDown"
        @keydown.up.prevent="handleArrowUp"
        :class="{'active': showOptions}"
      >
        <div class="label">
          <span class="text" v-if="!values.length">{{placeholder}}</span>
          <span class="select-item" v-for="(item, index) in values" :key="index">
            <span>{{item}}</span>
            <x-icon @click="select(item)" size="16" class="cross-icon"></x-icon>
          </span>
        </div>
        <div class="icon-wrapper">
          <x-icon
            v-if="values.length"
            class="icon remove-icon"
            @click="clear" size="20"
          >
          </x-icon>
          <chevron-down-icon v-else @click="toggle" size="20" class="icon chevron">
          </chevron-down-icon>
        </div>
      </button>
      <ul v-show="showOptions" role="listbox" tabindex="-1" :style="{maxHeight: `${maxHeight}px`}">
        <li
          @keyup.enter="select(option)"
          v-for="(option, i) in options"
          :key="`${option}-${i}`"
          @click="select(option)"
          role="option"
          :class="{'selected': values.includes(option), 'active': activeItemIndex === i}"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </cap-on-click-away>
</template>

<script>
import CapOnClickAway from "./CapOnClickAway";
import { ChevronDownIcon, ChevronUpIcon , XIcon} from "vue-feather-icons";

export default {
  name: "CapMultiSelect",
  data() {
    return {
      currentValue: null,
      showOptions: false,
      activeItemIndex: 0,
      values: []
    };
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
      default: "Select option",
    },

    label: {
      type: String,
      required: true,
    },

    maxHeight: {
      type: [String, Number],
      default: '385'
    },
  },
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    CapOnClickAway,
    XIcon
  },

  created() {
    this.values = this.value;
  },

  methods: {
    clear() {
      this.values = []
      this.$emit("change", this.values);
    },
    show() {
      this.showOptions = true;
    },
    hide() {
      this.showOptions = false;
      this.activeItemIndex = 0;
    },
    toggle() {
      this.showOptions = !this.showOptions
    },
    select(option) {  
      this.currentValue = option;
      if(!this.values.includes(this.currentValue)) {
        this.values.push(this.currentValue)   
      } else {
        const index = this.values.indexOf(this.currentValue)
        this.values.splice(index, 1)
      }
      this.$emit("change", this.values);
    },
    handleEnter() {
      if (!this.options.length || !this.showOptions) return
      this.select(this.options[this.activeItemIndex]);
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