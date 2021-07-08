<template>
	<div>
		<cap-footer>
			<cap-column>
				<cap-footer-brand>
					<img src="data:image/png;base64,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" alt="">
				</cap-footer-brand>
				<p class="cap-text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
					voluptatum alias voluptates, voluptatem molestias soluta...
				</p>
			</cap-column>
			<cap-column class="col">
				<cap-footer-list title="For empyloees">
					<div class="items-container">
						<cap-footer-item class="footer-items footer-item-links" v-for="(item, index) in items" :key="index">
						<chevron-right-icon
							size="1.3x"
							class="custom-class"
						></chevron-right-icon>
						<a :href="item.slug" class="link">{{ item.text }}</a>
					</cap-footer-item>
					</div>
				</cap-footer-list>
				<cap-footer-list title="For empyloees">
					<div class="items-container">
					<cap-footer-item class="footer-items footer-item-contact" v-for="(item, index) in items" :key="index">
						<chevron-right-icon
							size="1.3x"
							class="custom-class"
						></chevron-right-icon>
						<a :href="item.slug" class="link">{{ item.text }}</a>
					</cap-footer-item>
					</div>
				</cap-footer-list>
			</cap-column>
			<cap-seprator></cap-seprator>
			<cap-sub-footer>
				<span>copyright 2021 capwell bv</span>
				<span>PRIVACY & DISCLAIMER</span>
			</cap-sub-footer>
		</cap-footer>
	</div>
</template>

<script>
import CapFooterBrand from '../../../src/components/CapFooterBrand.vue';
import CapText from '../../../src/components/CapText.vue';
import CapColumn from '../../../src/components/CapColumn.vue';
import CapFooterList from '../../../src/components/CapFooterList.vue';
import CapFooterItem from '../../../src/components/CapFooterItem.vue';
import { ChevronRightIcon } from 'vue-feather-icons';
import CapSubFooter from '../../../src/components/CapSubFooter.vue';
import CapSeprator from '../../../src/components/CapSeprator.vue';

export default {
	name: 'DemoFooter',
	data() {
		return {
			items: [
				{ text: 'IT specialists', slug: '#' },
				{ text: 'IT specialists', slug: '#' },
				{ text: 'IT specialists', slug: '#' },
			],
		};
	},
	components: {
		CapFooterBrand,
		CapText,
		CapColumn,
		CapFooterList,
		CapFooterItem,
		ChevronRightIcon,
		CapSubFooter,
		CapSeprator,
	},
};
</script>

<style lang="scss" scoped>
.col {
	display: flex;
	justify-content: space-between;
}
</style>
