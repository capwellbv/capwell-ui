# Accordian

<demo-accordian></demo-accordian>

::: details Preview the code

```vue
<template>
  <cap-accordian>
    <cap-collapse id="accordian-item-1" title="Collapse 1">
      <p class="text">this is a collapse 1</p>
    </cap-collapse>
    <cap-collapse id="accordian-item-2" title="Collapse 2">
      <p class="text">this is a collapse 2</p>
    </cap-collapse>
    <cap-collapse id="accordian-item-3" title="Collapse 3">
      <p class="text">this is a collapse 3</p>
    </cap-collapse>
  </cap-accordian>
</template>

<script>
import CapAccordian from 'CapAccordian.vue';
import CapCollapse from 'CapCollapse.vue';
export default {
  name: 'DemoAccordian',
  components: {
    CapCollapse,
    CapAccordian
  }
};
</script>
<style scoped>
.text {
  margin-top: 0px;
  margin-bottom: 30px;
}
</style>
```

:::
