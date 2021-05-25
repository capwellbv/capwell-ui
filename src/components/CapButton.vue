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
				{'muted': muted},
				`${transform}`,
				`${font}`
		]"
		v-bind="$attrs"
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
	inheritAttrs: false,
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
		muted: { default: false },
		transform: {
      type: String,
      default: 'initial'
    },
		font: {
			type: String,
			default: 'bold'
		}
	},
	methods: {
		clickHandler(evt) {
			this.$emit('click', evt);
		},
	},
};
</script>
