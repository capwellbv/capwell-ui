# Header

<demo-header></demo-header>

::: details Preview the code

```vue
<template>
	<div>
		<cap-header>
			<cap-navbar-brand>logo</cap-navbar-brand>
			<template #logo>
				<cap-navbar-brand>logo</cap-navbar-brand>
			</template>
			<template #listMenu>
				<cap-nav-item v-for="(item, index) in items" :key="index">
					<a :href="item.slug" class="link">{{ item.name }}</a>
				</cap-nav-item>
			</template>
			<template #action>
				<cap-button varient="primary">Registered</cap-button>
			</template>
		</cap-header>
	</div>
</template>

<script>
import CapButton from '../../../src/components/CapButton.vue';
import CapNavbarBrand from '../../../src/components/CapNavbarBrand.vue';
import CapNavItem from '../../../src/components/CapNavItem.vue';
import CapNavBarNav from '../../../src/components/CapNavBarNav.vue';
export default {
	name: 'Header',
	components: {
		CapButton,
		CapNavbarBrand,
		CapNavItem,
		CapNavBarNav,
	},
	data() {
		return {
			items: [
				{ name: 'Home', slug: '#' },
				{ name: 'About', slug: '#' },
				{ name: 'Contact', slug: '#' },
				{ name: 'Serviecs', slug: '#' },
			],
		};
	},
};
</script>
```

:::