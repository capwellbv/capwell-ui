# Select

<Select />

::: details Preview the code

```vue
<template>
	<div>
		<cap-select
			v-model="selectdValue"
			:items="items"
			placeholder="Search skills"
			label="Search skills"
		>
		</cap-select>
	</div>
</template>

<script>
import { CapSelect } from "capwell-ui";
export default {
  components: {CapSelect},
  data() {
    return: {
      selectdValue: '',
			items: [
      'Dot NET ontwikkelaars',
      'Biztalk Consultants',
      'Ruby On Rails Developers',
      'Javascript Specialisten',
      'Vue Specialistens',
		  ],
    }
  }
};
</script>
```

:::
