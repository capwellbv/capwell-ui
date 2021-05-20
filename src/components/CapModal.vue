<template>
	<div :class="['cap-modal', 'cap-ui', { 'modal-hide': !show, 'modal-show': show }]">
		<div class="cap-model-inner" :class="size">
			<div class="cap-model-header">
				<span>{{ title }}</span>
				<div @click="dismiss" class="icon-circle">
					<x-icon  size="1x" class="close-icon"></x-icon>
				</div>
			</div>
			<div class="cap-model-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import CapButton from './CapButton';
import { XIcon } from 'vue-feather-icons';

export default {
	name: 'CapModal',
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
	},

	watch: {
		show(val) {
			if (val) {
				document.body.classList.add("cap-modal-open")
			} else {
				document.body.classList.remove("cap-modal-open")
			}
		}
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
