<template>
  <cap-on-click-away :do="hide">
    <div class="cap-select">
      <button
        :class="size"
        @click="show"
        aria-haspopup="listbox"
        @keyup.tab="show"
        @keydown.tab="hide"
        @keyup.esc="hide"
      >
       <span v-if="typeof this.buttonText === 'string'" :class="{ chosen: selectedValue }" class="text">{{buttonText}}</span>
        <div class="label" v-else >
          <span class="text" v-if="buttonText.length == 0">{{placeholder}}</span>
          <span class="select-item" v-for="(item, index) in this.buttonText" :key="index">{{item}}  <x-icon @click="select(item)" size="1x" class="cross-icon"></x-icon></span>
        </div>
        <chevron-up-icon v-if="showOptions" size="1.5x" class="icon"></chevron-up-icon>
        <chevron-down-icon v-else  size="1.5x" class="icon"></chevron-down-icon>
      </button>
      <ul v-show="showOptions" role="listbox" tabindex="-1">
        <li>
        </li>
        <li
          @keyup.enter="select(option)"
          v-for="(option, i) in options"
          :key="i"
          @click="select(option)"
          role="option"
          :class="{'selected': selectedValue == option && !multiple}"
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
  name: "CapMulti",
  data() {
    return {
      selectedValue: null,
      showOptions: false,
      selectedValueArr: []
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
    size: {
      type: String,
      default: "medium",
    },
    multiple: {
      type: [Boolean,String],
      default: false
    }
  },
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    CapOnClickAway,
    XIcon
  },

  computed: {
    buttonText(){
      if (this.selectedValue && this.multiple) {
        return this.selectedValueArr;
      } else if (this.selectedValue && !this.multiple) {
        return this.selectedValue
      }
      return this.placeholder;
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
      this.selectedValue = option;
      if(this.multiple) {
        if(!this.selectedValueArr.includes(this.selectedValue)) {
          this.selectedValueArr.push(this.selectedValue)   
        } else {
          let index = this.selectedValueArr.indexOf(this.selectedValue)
          this.selectedValueArr.splice(index, 1)
        }
        this.$emit("change", this.selectedValueArr);
      } else {
         this.$emit("change", this.selectedValue);
         this.hide()
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import "../css/select.scss";
</style>
