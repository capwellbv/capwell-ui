<template>
	<div class="cap-ui cap-link">
		<a :class="size" v-bind="$attrs" class="link">
			<slot />
		</a>
		<div v-if="$slots.icon" class="link link-icon">
			<slot name="icon"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CapLink',
	inheritAttrs: false,
	data() {
		return {
			hover: false,
		};
	},
	props: {
		size: {
			type: String,
			default: 'medium',
		},
	}
};
</script>
