# Textarea
Textarea:

<demo-textarea></demo-textarea>

::: details Preview the code

```vue
<template>
  <cap-textarea
    v-model="value"
    placeholder="placeholder"
    rows="3"
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

<demo-textarea-label></demo-textarea-label>

::: details Preview the code

```vue
<template>
   <cap-textarea-label
    v-model="value"
    placeholder="placeholder"
    label="Textarea label"
  ></cap-textarea-label>
</template>

<script>
import CapTextareaLabel from '../../../src/components/CapTextareaLabel.vue';
export default {
  name: "DemoTextareaLabel",
  components: { CapTextareaLabel },
  data() {
    return {
      value: "",
    };
  },
};


```

:::

