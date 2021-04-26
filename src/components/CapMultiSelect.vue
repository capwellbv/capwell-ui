<template>
  <cap-on-click-away :do="hide">
    <div class="cap-multi-select">
      <button
        :class="size"
        @click="show"
        aria-haspopup="listbox"
        @keyup.tab="show"
        @keydown.tab="hide"
        @keyup.esc="hide"
      >
        <div class="label">
          <span class="text" v-if="!values.length">{{placeholder}}</span>
          <span class="select-item" v-for="(item, index) in values" :key="index">
            {{item}}
            <x-icon @click="select(item)" size="1x" class="cross-icon"></x-icon>
          </span>
        </div>
        <chevron-up-icon v-if="showOptions" size="1.5x" class="icon"></chevron-up-icon>
        <chevron-down-icon v-else  size="1.5x" class="icon"></chevron-down-icon>
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
  name: "CapMulti",
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
    size: {
      type: String,
      default: "medium",
    }
  },
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    CapOnClickAway,
    XIcon
  },

  created() {
    this.values = this.values;
  },

  mounted() {
		const escapeHandler = (e) => {
			if (e.key === 'Escape' && this.showOptions) {
				this.hide();
			}
		};
		document.addEventListener('keydown', escapeHandler);
		this.$once('hook:destroyed', () => {
			document.removeEventListener('keydown', escapeHandler);
		});
	},

  computed: {
    buttonText() {
      if (this.currentValue) {
        return this.values;
      } else if (this.currentValue) {
        return this.currentValue
      }
      return this.placeholder;
    }
  },

  methods: {
    show() {
      this.showOptions = true;
    },

    hide() {
      this.showOptions = false;
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

<style scoped lang="scss">
@import "../css/multiselect.scss";
</style>
