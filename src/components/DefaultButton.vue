<template>
	<Button
		class="c-btn"
		:class="[
			`${varient}-btn`,
			size === 'xl'
				? 'btn-xl'
				: size === 'lg'
				? 'btn-lg'
				: size === 'md'
				? 'btn-md'
				: 'btn-sm',
		]"
		@click="clickHandler"
	>
		<slot></slot>
    <plus-icon v-if="varient === 'selected'" size="1.2x" class="icon"></plus-icon>
    <x-icon v-if="varient === 'unselected'" size="1.2x" class="icon"></x-icon>
	</Button>
</template>

<script>
import { PlusIcon, XIcon } from 'vue-feather-icons'
export default {
	name: 'DefaultButton',
	data() {
		return {};
	},
  components: {
    PlusIcon,
    XIcon
  },
	props: {
		varient: {
			type: String,
			default: 'default',
		},
		size: {
			type: String,
			default: 'sm',
		},
	},
	methods: {
		clickHandler(evt) {
			this.$emit('click', evt);
		},
	},
};
</script>

<style scoped lang="scss">
@import '../css/defaultButton.scss';
</style>
