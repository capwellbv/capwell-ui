# Radio group button

<demo-radio-group></demo-radio-group>

::: details Preview the code

```vue
<template>
	<div>
		<p>Vertical</p>
		<cap-radio-group v-model="checked1" :items="items" mode="vertical"></cap-radio-group>
		<p>Horizantal</p>
		<cap-radio-group v-model="checked2" :items="items"></cap-radio-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked1: 1,
			checked2: 1,
			items: [
				{ value: 1, label: 'Radio one' },
				{ value: 2, label: 'Radio two' },
				{ value: 3, label: 'Radio three' },
			],
		};
	},
};
</script>

```

:::
# Radio buttons

<demo-radio></demo-radio>

::: details Preview the code

```vue
<template>
	<cap-radio
		label="Radio"
		value="1"
		v-model="checked"
	></cap-radio>
</template>

<script>
export default {
	data() {
		return {
			checked: 1,
		};
	},
};
</script>
```

:::
