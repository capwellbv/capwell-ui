<template>
	<div :class="['modal', { 'modal-hide': !show, 'modal-show': show }]">
		<div class="modal-content">
			<div class="header">
				<span>{{ title }}</span>
				<x-icon @click="dismiss" size="1x" class="close-icon"></x-icon>
			</div>
			<div class="model-body">
				<slot></slot>
			</div>
			<div class="model-footer">
				<CapButton varient="secondary" size="sm" @click="dismiss"
					>Close</CapButton
				>
			</div>
		</div>
	</div>
</template>

<script>
import CapButton from './CapButton';
import { XIcon } from 'vue-feather-icons';

export default {
	props: {
		show: { default: false },
		title: {
			type: String,
			default: 'Welcome',
		},
	},

	components: {
		CapButton,
		XIcon,
	},

	mounted() {
		const escapeHandler = (e) => {
			if (e.key === 'Escape' && this.show) {
				this.dismiss();
			}
		};
		document.addEventListener('keydown', escapeHandler);
		this.$once('hook:destroyed', () => {
			document.removeEventListener('keydown', escapeHandler);
		});
	},

	methods: {
		dismiss() {
			this.$emit('close');
		},
	},
};
</script>

<style scoped lang="scss">
@import '../css/modal.scss';
</style>
