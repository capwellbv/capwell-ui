<template>
  <cap-on-click-away :do="hide">
    <div class="cap-multi-select cap-ui">
      <button
        @click="toggle"
        aria-haspopup="listbox"
        @keyup.tab="show"
        @keydown.tab="hide"
        @keyup.esc="hide"
        :class="{'active': showOptions}"
      >
        <div class="label">
          <span class="text" v-if="!values.length">{{placeholder}}</span>
          <span class="select-item" v-for="(item, index) in values" :key="index">
            {{item}}
            <x-icon @click="select(item)" size="14" class="cross-icon"></x-icon>
          </span>
        </div>
        <chevron-up-icon v-if="showOptions" size="20" class="icon"></chevron-up-icon>
        <chevron-down-icon v-else  size="20" class="icon"></chevron-down-icon>
      </button>
      <ul v-show="showOptions" role="listbox" tabindex="-1">
        <li></li>
        <li
          @keyup.enter="select(option)"
          v-for="(option, i) in options"
          :key="`${option}-${i}`"
          @click="select(option)"
          role="option"
          :class="{'selected': values.includes(option)}"
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
    show() {
      this.showOptions = true;
    },

    hide() {
      this.showOptions = false;
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
    
  },
};
</script>