<template>
		<div>
      <p>Vertical</p>
      <cap-radio v-model="checked" :items="items" mode="vertical"></cap-radio>

      <p>Horizantal</p>
      <cap-radio v-model="checked" :items="items"></cap-radio>
    </div>
</template>

<script>
export default {
	name: 'DemoRadio',
	data() {
		return {
			checked: '',
			items: [
				{ value: 1, label: 'Radio one' },
				{ value: 2, label: 'Radio two' },
				{ value: 3, label: 'Radio three' },
			],
		};
	},
};
</script>
