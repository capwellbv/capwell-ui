<template>
	<div :class="['cap-modal', 'cap-ui', { 'modal-hide': !show, 'modal-show': show }]">
		<div class="cap-model-inner" :class="size">
			<div v-if="header" class="cap-model-header">
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
		},
		header: {
			type: Boolean,
			default: true
		}
	},

	components: {
		CapButton,
		XIcon,
	},

	watch: {
		show: {
			immediate: true,
			handler(val) {
				if (val) {
					document.body.classList.add("cap-modal-open")
				}
			}
		}
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
			document.body.classList.remove("cap-modal-open")
			this.$emit('close');
		},
	},
};
</script>
