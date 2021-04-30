# Input

 <demo-input></demo-input>

::: details Preview the code

```vue
<template>
	<div>
		<cap-input style="margin-top: 20px" placeholder="enter value">
			<template #icon>
				<search-icon size="1.5x" class="icon"></search-icon>
			</template>
		</cap-input>

		<cap-input
			style="margin-top: 20px"
			placeholder="enter value"
			:disabled="true"
		>
			<template #icon>
				<search-icon size="1.5x" class="icon"></search-icon>
			</template>
		</cap-input>

		<cap-input
			style="margin-top: 20px"
			placeholder="enter value"
			:rounded="true"
		>
			<template #icon>
				<search-icon size="1.5x" class="icon"></search-icon>
			</template>
		</cap-input>
	</div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons';

export default {
	components: {
		ArrowRightIcon,
	},
};
</script>
```

:::
