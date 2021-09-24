<template>
	<div>
		<p>Vertical</p>
		<cap-radio-group v-model="checked1" :items="items" mode="vertical"></cap-radio-group>
		<p>Horizantal</p>
		<cap-radio-group v-model="checked2" :items="items"></cap-radio-group>
	</div>
</template>

<script>
export default {
	name: 'DemoRadioGroup',
	data() {
		return {
			checked1: 1,
			checked2: 1,
			items: [
				{ value: 1, label: 'Radio one' },
				{ value: 2, label: 'Radio two' },
				{ value: 3, label: 'Radio three' },
			],
		};
	},
};
</script>
