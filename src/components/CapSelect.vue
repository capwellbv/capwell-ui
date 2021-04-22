<template>
	<div
		class="cap-select">
		<button
      :class="size"
			@click="show"
			aria-haspopup="listbox"
			@keyup.tab="show"
			@keydown.tab="hide"
			@keyup.esc="hide"
		>
			<span v-if="selectedValue" class="label">{{ this.label }}</span>
			<span :class="{ 'chosen': selectedValue }" class="text">{{
				this.buttonText
			}}</span>
			<chevron-down-icon size="1.5x" class="icon"></chevron-down-icon>
		</button>
		<ul v-show="showOptions" role="listbox" tabindex="-1">
			<li>
				<span>{{ this.placeholder }}</span>
         <chevron-up-icon size="1.5x" class="icon"></chevron-up-icon>
			</li>
			<li
				@keyup.enter="select(i)"
				v-for="(option, i) in items"
				:key="i"
				@click="select(i)"
				role="option"
			>
				{{ option }}
			</li>
		</ul>
	</div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from 'vue-feather-icons';

export default {
	name: 'CapSelect',

	props: {
		items: {
			type: Array,
			required: true,
		},

		selected: {
			type: Number,
			required: false,
			default: -1,
		},

		placeholder: {
			type: String,
			required: true,
		},

		label: {
			type: String,
			required: true,
		},
    size: {
      type: String,
      default: 'medium'
    }
	},

	data() {
		return {
			selectedValue: null,
			showOptions: false,
			buttonText: '',
		};
	},
	components: {
		ChevronDownIcon,
		ChevronUpIcon,
	},

	mounted() {
		if (this.selected !== -1) {
			this.selectedValue = this.options[this.selected];
			this.buttonText = this.selectedValue;
			this.$el
				.querySelectorAll('li')
				[this.selected + 1].classList.add('selected');
		} else {
			this.buttonText = this.placeholder;
		}
	},

	methods: {
		show() {
			this.showOptions = true;
		},

		hide() {
			this.showOptions = false;
		},

		select(i) {
			this.selectedValue = this.items[i];
			if (this.$el.querySelector('.selected')) {
				this.$el.querySelector('.selected').classList.remove('selected');
			}
			this.$el.querySelectorAll('li')[i + 1].classList.add('selected');
			this.buttonText = this.selectedValue;
			this.$emit('input', this.selectedValue);
			this.hide();
		},
	},
};
</script>

<style scoped lang="scss">
@import '../css/select.scss';
</style>
