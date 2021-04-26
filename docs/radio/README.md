# Radio buttons

<Radio />

::: details Preview the code

```vue
<template>
	<div>
		<cap-radio v-model="checked" :items="items" mode="vertical"></cap-radio>
		<cap-radio v-model="checked" :items="items" ></cap-radio>
	</div>
</template>

<script>
  data() {
		return {
			checked: '',
			items: [
				{ value: 1, label: 'one' },
				{ value: 2, label: 'two' },
				{ value: 3, label: 'three' },
			],
		};
	},
</script>

```

:::
