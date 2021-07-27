# Footer

<router-link to="/headerFooter" target="_blank">Click Here to view Footer<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></router-link>

::: details Preview the code

```vue
<template>
	<div>
		<cap-footer
			logo="your logo link"
			alt-text="footer"
			lead-text="Het is onze drive om de juiste ICT-specialist op de juiste plek te krijgen. En dat lukt ons keer op keer. Niet zelden krijgen we positieve reacties van onze klanten over de perfecte match."
			trademark-text="Copyright 1999-2021, Capwell B.V."
		>
			<template #leadText="{ leadText }">
				{{ leadText }}
				<a class="link inline-link" href="#">this is a test link</a>
			</template>
			<cap-footer-list title="Voor werkgevers" class="links-list">
				<cap-footer-list-item v-for="item in items" :key="item.text">
					<chevron-right-icon size="18" class="icon"></chevron-right-icon>
					<a class="link" href="#">{{ item.text }}</a>
				</cap-footer-list-item>
			</cap-footer-list>
			<cap-footer-list title="Contact" class="contact">
				<cap-footer-list-item>
					<home-icon size="18" class="icon"></home-icon>
					<a class="link" href="#">
						<span class="text">Havenstraat 30 3115 HD Schiedam</span>
					</a>
				</cap-footer-list-item>
				<cap-footer-list-item>
					<mail-icon size="18" class="icon"></mail-icon>
					<a class="link" href="#">
						<span class="text">info@capwell.nl</span>
					</a>
				</cap-footer-list-item>
				<cap-footer-list-item>
					<phone-icon size="18" class="icon"></phone-icon>
					<a class="link" href="#">
						<span class="text">010-475 55 83</span>
					</a>
				</cap-footer-list-item>
				<cap-footer-list-item>
					<linkedin-icon size="18" class="icon"></linkedin-icon>
					<a class="link" href="#">
						<span class="text">LinkedIn</span>
					</a>
				</cap-footer-list-item>
			</cap-footer-list>
			<template slot="privacy">
				<a href="#" class="link">Privacy & Disclaimer</a>
			</template>
		</cap-footer>
	</div>
</template>

<script>
import CapFooter from '../../../src/components/CapFooter.vue';
import CapFooterListItem from '../../../src/components/CapFooterListItem.vue';
import CapFooterList from '../../../src/components/CapFooterList.vue';
import { ChevronRightIcon, MailIcon, PhoneIcon, LinkedinIcon, HomeIcon } from 'vue-feather-icons';

export default {
	name: 'DemoFooter',
	data() {
		return {
			items: [
				{ text: 'Vind IT-specialisten', slug: '#' },
				{ text: 'Zoekprofiel doorgeven', slug: '#' },
				{ text: 'Uurtarief opvragen', slug: '#' },
			],
		};
	},
	components: {
		CapFooter,
		CapFooterList,
		CapFooterListItem,
		ChevronRightIcon,
		MailIcon,
		PhoneIcon,
		LinkedinIcon,
		HomeIcon
	},
};
</script>

<style lang="scss">
.cap-footer {
	.links-list {
		grid-column: 7/span 3;
	}
}
</style>
```

:::
