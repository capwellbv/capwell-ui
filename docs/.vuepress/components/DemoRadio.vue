<template>
	<div>
		</br>
		</br>
		<cap-radio
			label="Radio"
			value="1"
			v-model="checked"
		></cap-radio>
	</div>
</template>

<script>
export default {
	name: 'DemoRadio',
	data() {
		return {
			checked: 1,
		};
	},
};
</script>