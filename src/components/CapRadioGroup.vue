<template>
	<div class="cap-ui cap-radio-group" :class="mode">
		<div v-for="(item, index) in items" :key="index" class="cap-radio-wrapper">
			<cap-radio :label="item.label" v-bind="$attrs" :value="item.value" @change="handleChange"></cap-radio>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CapRadioGroup',
	inheritAttrs: false,
	data() {
		return {
			checked: null,
		};
	},
	model: {
    prop: 'modelValue',
    event: 'change'
  },
	props: {
		items: {
			type: [Array, Object],
		},
    mode: {
      type: String,
      default: 'horizontal'
    }
	},
	methods: {
		handleChange(val) {
			this.$emit('change', val);
		},
	},
};
</script>