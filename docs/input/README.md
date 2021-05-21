# Input

Default:

 <demo-input></demo-input>

::: details Preview the code

```vue
<template>
	<cap-input
		v-model="value"
		placeholder="default input"
	></cap-input>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
```

:::

Sizing:

 <demo-input-sizing></demo-input-sizing>

::: details Preview the code

```vue
<template>
  <div>
    <cap-input
      v-model="value"
      placeholder="large input"
      size="large"
    ></cap-input>
    <cap-input
      v-model="value"
      placeholder="medium input"
      size="medium"
    ></cap-input>
    <cap-input
      v-model="value"
      placeholder="small input"
      size="small"
    ></cap-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
```

:::

Rounded:

 <demo-input-rounded></demo-input-rounded>

::: details Preview the code

```vue
<template>
	<cap-input
		v-model="value"
		placeholder="rounded input"
		rounded
	></cap-input>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
```

:::

With Icon:

 <demo-input-icon></demo-input-icon>

::: details Preview the code

```vue
<template>
  <cap-input
    v-model="value"
    placeholder="input with icon"
    size="large"
  >
    <template #icon>
      <user-icon size="1.2x" class="icon"></user-icon>
    </template>
  </cap-input>
</template>

<script>
import { UserIcon } from "vue-feather-icons";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    UserIcon
  }
};
</script>
```

:::

Disabled:

 <demo-input-disabled></demo-input-disabled>

::: details Preview the code

```vue
<template>
	<cap-input
		v-model="value"
		placeholder="disabled input"
		disabled
	></cap-input>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
```

:::

With Error:

 <demo-input-error></demo-input-error>

::: details Preview the code

```vue
<template>
	<cap-input
		v-model="value"
		placeholder="input with error"
		error="this is error text"
	></cap-input>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
```

:::

