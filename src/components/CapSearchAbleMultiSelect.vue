<template>
	<div class="cap-search-able-multi-select">
		<cap-on-click-away :do="hide">
			<div class="searchable-select" :class="{ active: showOptions }">
				<div class="select-container" :class="[size, { rounded }]">
					<div class="select-items">
						<span v-for="value in selectedValues" :key="value"
							>{{ value }}
							<x-icon @click="select(value)" size="1.2x" class="icon"></x-icon
						></span>
						<input
							type="text"
							v-model="selectedValue"
							:placeholder="placeholder"
							class="input"
							aria-haspopup="listbox"
							@click="show"
							@keyup="searchStart"
							@keydown="$emit('unselected')"
							@keyup.tab="show"
							@keydown.tab="hide"
							@keyup.esc="hide"
							@input="handleInput"
						/>
					</div>
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
import { ChevronDownIcon, ChevronUpIcon, XIcon } from 'vue-feather-icons';
import CapOnClickAway from './CapOnClickAway.vue';

export default {
	name: 'CapSearchAbleSelect',
	components: {
		ChevronDownIcon,
		ChevronUpIcon,
		CapOnClickAway,
		XIcon,
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
			default: 'medium',
		},
		rounded: {
			type: [Boolean, String],
			default: false,
		},
	},

	data() {
		return {
			selectedValue: null,
			showOptions: false,
			level: '',
			filteredOptions: this.options,
			selectedValues: [],
		};
	},

	methods: {
		searchStart() {
			if (this.selectedValue.length) {
				this.show();
				this.filteredOptions = this.options.filter((option) =>
					option.toLowerCase().includes(this.selectedValue.toLowerCase())
				);
			} else {
				this.filteredOptions = this.options;
			}
		},

		handleInput(event) {
			this.$emit('input', event.target.value);
		},

		show() {
			this.showOptions = true;
		},

		hide() {
			this.showOptions = false;
		},

		select(option) {
			this.selectedValue = option;
			if (!this.selectedValues.includes(this.selectedValue)) {
				this.selectedValues.push(this.selectedValue);
			} else {
				let index = this.selectedValues.indexOf(this.selectedValue);
				this.selectedValues.splice(index, 1);
			}
			this.$emit('change', this.selectedValues);
			this.selectedValue = null;
			console.log(this.selectedValues);

			// this.selectedValue = option;
			// this.level = this.selectedValue;
			// this.$emit('input', option.value);
			// this.hide();
		},

		reset() {
			this.selectedValue = null;
			this.level = '';
		},

		setValue(value) {
			this.selectedValue = value;
			this.level = this.selectedValue;
		},
	},
};
</script>

<style scoped lang="scss">
@import '../css/searchablemultiselect.scss';
</style>
