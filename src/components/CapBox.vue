<template>
	<div :class="`box-${size}`" class="cap-box"></div>
</template>

<script>
export default {
	name: 'CapBox',
	props: {
		size: {
			type: [Number, String],
			default: 120,
		},
	},
};
</script>

<style scoped lang="scss">
@import '../css/box.scss';
</style>
