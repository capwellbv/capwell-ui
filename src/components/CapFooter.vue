<template>
	<footer :class="[prefix, 'cap-footer', `cap-footer-${variant}`]">
		<cap-container>
			<div class="cap-footer-info">
				<slot name="info" v-bind="{ altText, logo, leadText }">
					<img :src="logo" :alt="altText" class="footer-logo">
					<cap-text size="6" font="normal" class="footer-lead-text">
						<slot name="leadText" v-bind="{ leadText }">
          		{{ leadText }}
						</slot>
        	</cap-text>
				</slot>
			</div>
			<slot></slot>
			<cap-seprator></cap-seprator>
			<div class="footer-trademark">
				<slot name="trademark">
					<cap-title
						type="subheading"
						size="4"
						font="bold"
						transform="uppercase"
						class="trademark-text"
					>
						{{ trademarkText }}
					</cap-title>
					<cap-title
						type="subheading"
						size="4"
						font="bold"
						transform="uppercase"
						class="trademark-text"
					>
						<slot name="privacy">
						</slot>
					</cap-title>
				</slot>
			</div>
		</cap-container>
	</footer>
</template>

<script>
import { scssPrefix } from '../styles/_variables.scss';
import CapContainer from './CapContainer.vue';

export default {
	name: 'CapFooter',
  components: {
		CapContainer
	},
	props: {
		variant: {
			type: String,
			default: 'primary',
		},
		altText: {
			type: String,
			default: null,
		},
		logo: {
			type: String,
			default: null,
		},
		leadText: {
			type: String,
			default: null,
		},
		trademarkText: {
			type: String,
			default: null,
		}
	},
	computed: {
		prefix() {
			return JSON.parse(scssPrefix)
		},
	},
};
</script>
