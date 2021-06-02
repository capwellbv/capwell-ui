# Textarea
Textarea:

<demo-textarea></demo-textarea>

::: details Preview the code

```vue
<template>
  <cap-textarea
    v-model="value"
    placeholder="placeholder"
  ></cap-textarea>
</template>

<script>

export default {
  name: "DemoTextarea",
  data() {
    return {
      value: "",
    };
  },
};
</script>


```

:::
Textarea with Label :

<demo-floating-label-textarea></demo-floating-label-textarea>

::: details Preview the code

```vue
<template>
   <demo-floating-label-textarea
    v-model="value"
    placeholder="placeholder"
    label="Floating Textarea label"
  ></demo-floating-label-textarea>
</template>

<script>
export default {
  name: "DemoFloatingLabelTextarea",
  components: { CapFloatingLabelTextarea },
  data() {
    return {
      value: "",
    };
  },
};


```

:::

