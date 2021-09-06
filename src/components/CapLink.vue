<template>
	<a v-bind="$attrs" :class="['cap-ui cap-link', { inline }]">
		<slot />
	</a>
</template>

<script>
export default {
	name: 'CapLink',
	inheritAttrs: false,
	props: {
		inline: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	}
};
</script>
