#  Select Able Multi Select
<SearchAbleMultiSelect />

::: details Preview the code

```vue
<template>
	<div>
		<cap-search-able-multi-select
			v-model="selectdValue"
			:options="items"
      placeholder="Search skills"
      size=""
      rounded=""
		>
		</cap-search-able-multi-select>
	</div>
</template>

<script>
import { CapSearchAbleMultiSelect } from "capwell-ui";
export default {
  components: {CapSearchAbleMultiSelect},
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
