# Search Dropdown

<demo-search-dropdown></demo-search-dropdown>

::: details Preview the code

```vue
<template>
  <div>
    <cap-search-dropdown
      v-model="selectdValue"
      :options="items"
      placeholder="Search skills"
      size=""
      rounded=""
    >
    </cap-search-dropdown>
  </div>
</template>

<script>
import { CapSearchDropdown } from "capwell-ui";
export default {
  components: {CapSearchDropdown},
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
