<template>
		<div>
      <cap-radio
				label="Radio"
				value="Radio"
				v-model="checked"
			></cap-radio>
    </div>
</template>

<script>
export default {
	name: 'DemoRadio',
	data() {
		return {
			checked: '',
		};
	},
};
</script>