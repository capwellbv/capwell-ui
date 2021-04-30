<template>
	<!-- <cap-on-click-away :do="hide"> -->
		<div :class="['cap-modal', { 'modal-hide': !show, 'modal-show': show }]" class="cap-ui">
			<div class="cap-model-inner" :class="size">
				<div class="cap-model-header">
					<span>{{ title }}</span>
					<x-icon @click="dismiss" size="1x" class="close-icon"></x-icon>
				</div>
				<div class="cap-model-body">
					<slot></slot>
				</div>
			</div>
		</div>
	<!-- </cap-on-click-away> -->
</template>

<script>
import CapButton from './CapButton';
// import CapOnClickAway from "./CapOnClickAway";
import { XIcon } from 'vue-feather-icons';

export default {
	props: {
		show: { default: false },
		title: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'sm'
		}
	},

	components: {
		CapButton,
		XIcon,
		// CapOnClickAway
	},

	mounted() {
		// const overlay = document.querySelector('.cap-modal');
		// const popup = document.querySelector('.cap-model-inner');
		const escapeHandler = (e) => {
			if (e.key === 'Escape' && this.show) {
				this.dismiss();
			}
		};
		document.addEventListener('keydown', escapeHandler);
		this.$once('hook:destroyed', () => {
			document.removeEventListener('keydown', escapeHandler);
		});
		// overlay.addEventListener('click', (e) => {
		// 	if(!e.target.className.includes(popup.className)) {
		// 		this.$emit('close')
		// 	}
		// })
	},

	methods: {
		dismiss() {
			this.$emit('close');
		},
	},
};
</script>
