<template>
	<div>
		<CapButton varient="secondary" size="xl" @click="show = true"
			>Show modal</CapButton
		>
		<CapModal :show="show" @close="show = false" title="model title">
			<p>lorem ipsum Lorem ipsum dolor sit amet consectetur</p>
		</CapModal>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	data() {
		return {
			show: false,
		};
	},
};
</script>
