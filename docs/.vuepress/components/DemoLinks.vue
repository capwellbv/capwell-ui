<template>
	<div>
		<cap-link class="test" src="#">This is demo link</cap-link>
		<br />
		<br />
		<cap-link inline class="test" src="#">This is demo inline-link</cap-link>
	</div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons';
export default {
	name: 'DemoLinks',
	components: {
		ArrowRightIcon,
	},
};
</script>
