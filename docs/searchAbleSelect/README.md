#  Select Able Select
<SearchAbleSelect />

::: details Preview the code

```vue
<template>
	<div>
		<cap-search-able-select
			v-model="selectdValue"
			:options="items"
      placeholder="Search skills"
      size=""
      rounded=""
		>
		</cap-search-able-select>
	</div>
</template>

<script>
import { CapSearchAbleSelect } from "capwell-ui";
export default {
  components: {CapSearchAbleSelect},
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
