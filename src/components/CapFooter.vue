<template>
	<footer :class="[prefix, 'cap-footer', `cap-footer-${variant}`]">
		<cap-container>
			<div class="cap-footer-info">
				<slot name="info" v-bind="{ altText, logo, leadText }">
					<img :src="logo" :alt="altText" class="footer-logo">
					<cap-text size="6" font="300" class="footer-lead-text">
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
						tag="h6"
						type="subheading"
						size="2"
						font="700"
						transform="uppercase"
						class="mb-0 trademark-text"
					>
						{{ trademarkText }}
					</cap-title>
					<cap-title
						tag="h6"
						type="subheading"
						size="2"
						font="700"
						transform="uppercase"
						class="mb-0 trademark-text"
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
