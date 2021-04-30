# Multi Select

<demo-multi-select></demo-multi-select>

::: details Preview the code

```vue
<template>
	<div>
		<cap-multi-select
			v-model="skills"
			:items="items"
			placeholder="Search skills"
			label="Search skills"
		>
		</cap-multi-select>
	</div>
</template>

<script>
import { CapMultiSelect } from "capwell-ui";
export default {
  components: {CapMultiSelect},
  data() {
    return: {
      skills: '',
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
