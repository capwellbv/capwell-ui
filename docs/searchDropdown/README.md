# Search Dropdown

## Usage

<demo-search-dropdown></demo-search-dropdown>

::: details Preview the code

```vue
<template>
  <div>
    <cap-search-dropdown
      v-model="selectdValue"
      :options="items"
      placeholder="Search skills"
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

## Options
| Option         | Type's  | Default         | Description                               |
| -------------- |:-------:| ---------------:| -----------------------------------------:|
| options        | Array   | ''              | Select options to show in dropdown.       |
| placeholder    | String  | 'Select option' | Dropdown placeholder.                     |
| showRemoveIcon | Boolean | true            | Show remove icon to remove selected item. |

## Events
| Event          | Params  | Description                   |
| --------------- |:-------:| ----------------------------:|
| @change         | String  | Emits on value select.       |
| @onFilterChange | String  | Emits on input value change. |
