<template>
	<Button
		class="cap-ui cap-btn"
		:class="[
			`cap-${varient}-btn`,
			size === 'xl'
				? 'btn-xl'
				: size === 'lg'
				? 'btn-lg'
				: size === 'md'
				? 'btn-md'
				: 'btn-sm',
				{'muted': muted}
		]"
		@click="clickHandler"
	>
		<slot/>
		<div class="icon">
			<slot name="icon"></slot>
		</div>
	</Button>
</template>

<script>
export default {
	name: 'CapButton',
	data() {
		return {};
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
		muted: { default: false }
	},
	methods: {
		clickHandler(evt) {
			this.$emit('click', evt);
		},
	},
};
</script>
