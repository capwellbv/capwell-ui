<template>
	<div class="cap-link">
		<a :href="src" :class="size" class="link">{{ text }}</a>
		<arrow-right-icon size="1.2x" class="link-icon"></arrow-right-icon>
	</div>
</template>

<script>
import { ChevronRightIcon, ArrowRightIcon } from 'vue-feather-icons';
export default {
	name: 'CapLink',
	data() {
		return {
			hover: false,
		};
	},
	props: {
		text: {
			type: String,
		},
		src: {
			type: String,
		},
		size: {
			type: String,
			default: 'medium',
		},
	},
	components: {
		ChevronRightIcon,
		ArrowRightIcon,
	},
};
</script>

<style scoped lang="scss">
@import '../css/link.scss';
</style>
