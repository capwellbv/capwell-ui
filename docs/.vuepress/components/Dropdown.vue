<template>
	<div>
		<cap-dropdown text="dropdown" :menu="closeMenu" @handle-menu="handleMenu">
			<template #menu>
				<ul>
					<li
						v-for="(item, index) in items"
						:key="index"
						@click="closeMenu = false"
					>
						<span>{{ item.text }}</span>
					</li>
				</ul>
			</template>
		</cap-dropdown>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
	data() {
		return {
			closeMenu: false,
			items: [
				{ text: 'item one' },
				{ text: 'item two' },
				{ text: 'item three' },
			],
		};
	},
	methods: {
		handleMenu(value) {
			this.closeMenu = value;
		},
	},
};
</script>
