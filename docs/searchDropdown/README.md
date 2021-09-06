# Search Dropdown

<demo-search-dropdown></demo-search-dropdown>

::: details Preview the code

```vue
<template>
  <div>
    <cap-search-dropdown
      v-model="selectdSkill"
      :options="items"
      placeholder="Search skills"
    >
    </cap-search-dropdown>

    <cap-search-dropdown
      v-model="selectdSkill1"
      :options="items"
      :icon-right="false"
      :show-on-focus="false"
      class="filter-jobs-options"
      placeholder="Search skills"
    >
      <template #prepend>
        <search-icon size="20" class="search-icon icon"></search-icon>
      </template>
    </cap-search-dropdown>
  </div>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    SearchIcon
  },
  data() {
    return {
      selectdSkill1: null,
      selectdSkill: null,
      items: [
        "Dot NET ontwikkelaars",
        "Biztalk Consultants",
        "Ruby On Rails Developers",
        "Javascript Specialisten",
        "Vue Specialistens",
      ],
    };
  },
};
</script>

<style lang="scss">
.cap-ui {
  &.cap-search-dropdown {
    &.filter-jobs-options {
      .search-icon {
        stroke-width: 3px;
      }
    }
  }
}
</style>
```

:::

### Options
| Option         | Type's  | Default         | Description                               |
| -------------- |:-------:| ---------------:| -----------------------------------------:|
| options        | Array   | ''              | Select options to show in dropdown.       |
| placeholder    | String  | 'Select option' | Dropdown placeholder.                     |
| showRemoveIcon | Boolean | true            | Show remove icon to remove selected item. |
| iconRight      | Boolean | true            | Show default search icon in right side.   |
| prepend        | String  | null            | Anything want to prepend using prop       |
| append         | String  | null            | Anything want to append using prop        |
| showOnFocus    | Boolean | true            | Show options on input focus               |
| scrollable     | Boolean | false           | Show scrollbar                            |
| maxItems       | Number  | null            | Max number of items to show in list       |
| rounded        | Boolean, String | false     | Rounded variant                           |

### Events
| Event          | Params  | Description                   |
| --------------- |:-------:| ----------------------------:|
| @change         | String  | Emits on value select.       |
| @onFilterChange | String  | Emits on input value change. |
