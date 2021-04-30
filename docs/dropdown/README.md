# Dropdown

<demo-dropdown></demo-dropdown>

::: details Preview the code

```vue
<template>
  <div>
    <cap-dropdown text="dropdown" :show="showMenu" @toggle="(value) => showMenu = value">
      <cap-dropdown-item
        v-for="(item, index) in items"
        :key="index"
        :value="item.text"
      >
      </cap-dropdown-item>
    </cap-dropdown>
  </div>
</template>

<script>
import { CapDropdown, CapDropdownItem } from "capwell-ui";
export default {
  components: {
    CapDropdown,
    CapDropdownItem
  },
  data() {
    return {
      showMenu: false,
      items: [
        { text: "item one" },
        { text: "item two" },
        { text: "item three" },
      ],
    };
  },
};
</script>
```

:::
