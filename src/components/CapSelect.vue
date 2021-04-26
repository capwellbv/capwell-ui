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
        <span v-if="selectedValue" class="label">{{ this.label }}</span>
        <span :class="{ chosen: selectedValue }" class="text">
          {{ this.buttonText }}
        </span>
        <chevron-down-icon size="1.5x" class="icon"></chevron-down-icon>
      </button>
      <ul v-show="showOptions" role="listbox" tabindex="-1">
        <li>
          <span>{{ this.placeholder }}</span>
          <chevron-up-icon size="1.5x" class="icon"></chevron-up-icon>
        </li>
        <li
          @keyup.enter="select(i)"
          v-for="(option, i) in options"
          :key="i"
          @click="select(i)"
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
import { ChevronDownIcon, ChevronUpIcon } from "vue-feather-icons";
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
    size: {
      type: String,
      default: "medium",
    },
  },
  data() {
    return {
      selectedValue: null,
      showOptions: false,
    };
  },
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    CapOnClickAway,
  },
  mounted() {
    if (this.value !== null) {
      this.selectedValue = this.options[this.value];
      this.$el.querySelectorAll("li")[this.value + 1].classList.add("selected");
    }

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
      if (this.selectedValue) {
        return this.selectedValue;
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
    select(i) {
      this.selectedValue = this.options[i];
      if (this.$el.querySelector(".selected")) {
        this.$el.querySelector(".selected").classList.remove("selected");
      }
      this.$el.querySelectorAll("li")[i + 1].classList.add("selected");
      this.$emit("change", this.selectedValue);
      this.hide();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../css/select.scss";
</style>