<template>
	<div class="cap-column">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'CapColumn',
	props: {
		column: {
			type: [Number, String],
			default: '1',
		},
	},
};
</script>