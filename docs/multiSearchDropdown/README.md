#  Multi Search Dropdown
<demo-multi-search-dropdown></demo-multi-search-dropdown >

::: details Preview the code

```vue
<template>
	<div>
		<cap-multi-search-dropdown
			v-model="selectdValue"
			:options="items"
      placeholder="Search skills"
      size=""
      rounded=""
		>
		</cap-multi-search-dropdown>
	</div>
</template>

<script>
import { CapMultiSearchDropdown } from "capwell-ui";
export default {
  components: {CapMultiSearchDropdown},
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
