# Modals

<Modal></Modal>

::: details Preview the code

```vue
<template>
	<div>
		<CapButton varient="secondary" size="xl" @click="show = true"
			>Show modal</CapButton
		>
		<CapModal :show="show" @close="show = false" title="model title">
			<p>lorem ipsum Lorem ipsum dolor sit amet consectetur</p>
		</CapModal>
	</div>
</template>

<script>
import { CapButton, CapModal } from 'capwell-ui';
export default {
	data() {
		return {
			show: false,
		};
	},

	components: {
		CapModal,
		CapButton,
	},
};
</script>
```

:::
