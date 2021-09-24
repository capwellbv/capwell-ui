<template>
	<div class="cap-ui cap-radio">
		<label class="radio-wrapper">
			<input class="radio-input"
				type="radio"
				@change="handleChange"
				:checked="isChecked"
				:value="value"
				v-bind="$attrs"
			/>
			<span class="radio-label">{{ label }}</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'CapRadio',
	inheritAttrs: false,
	model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    label: { 
			type: String, 
			default: ""
		},
    modelValue: {
			default: ""
		},
    value: {
			default: undefined,
			required: true
		}
  },
  computed: {
    isChecked() {
      return this.modelValue == this.value
    }
  },
	methods: {
		handleChange(e) {
      this.$emit('change', e.target.value)
		},
	},
};
</script>