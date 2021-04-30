<template>
	<div class="cap-ui cap-radio" :class="mode">
		<div v-for="(item, index) in items" :key="index" class="cap-radio-wrapper">
			<input
				type="radio"
				:value="item.value"
				@change="handleChange"
				v-model="checked"
			/>
			<label>{{ item.label }}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CapRadio',
	data() {
		return {
			checked: null,
		};
	},
	props: {
		items: {
			type: [Array, Object],
		},
    mode: {
      type: String,
      default: 'horizantal'
    }
	},
	methods: {
		handleChange(e) {
			this.$emit('input', this.checked);
		},
	},
};
</script>