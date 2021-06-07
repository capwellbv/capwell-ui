# Radio group button

<demo-radio-group></demo-radio-group>

::: details Preview the code

```vue
<template>
	<div>
		<cap-radio-group v-model="checked" :items="items" mode="vertical"></cap-radio-group>
		<cap-radio-group v-model="checked" :items="items" ></cap-radio-group>
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
# Radio buttons

<demo-radio></demo-radio>

::: details Preview the code

```vue
<template>
		<div>
      <cap-radio label="Foo" value="foo" v-model="checked"></cap-radio>
    </div>
</template>

<script>
export default {
	name: 'DemoRadio',
	data() {
		return {
			checked: '',
		};
	},
};
</script>
```

:::
