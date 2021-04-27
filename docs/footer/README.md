# Footer

<Footer />

::: details Preview the code

```vue
<template>
	<div>
		<cap-footer>
			<cap-column>
				<cap-footer-brand> LOGO </cap-footer-brand>
				<p class="cap-text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
					voluptatum alias voluptates, voluptatem molestias soluta...
				</p>
			</cap-column>
			<cap-column class="col">
				<cap-footer-list title="For empyloees">
					<cap-footer-item v-for="(item, index) in items" :key="index">
						<chevron-right-icon
							size="1.3x"
							class="custom-class"
						></chevron-right-icon>
						<a :href="item.slug" class="link">{{ item.text }}</a>
					</cap-footer-item>
				</cap-footer-list>
				<cap-footer-list title="For empyloees">
					<cap-footer-item v-for="(item, index) in items" :key="index">
						<chevron-right-icon
							size="1.3x"
							class="custom-class"
						></chevron-right-icon>
						<a :href="item.slug" class="link">{{ item.text }}</a>
					</cap-footer-item>
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
```

:::
