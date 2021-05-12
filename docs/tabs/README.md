# Tabs


Examples:

<demo-tabs></demo-tabs>

::: details Preview the code
```vue
<template>
  <cap-tabs :footer="false">
    <cap-tab-pane name="Tab one" :selected="true">
      <span>this is tab one</span>
    </cap-tab-pane>
    <cap-tab-pane name="Tab two" :selected="false">
      <span>this is tab two</span>
    </cap-tab-pane>
    <cap-tab-pane name="Tab three" :selected="false">
      <span>this is tab three</span>
    </cap-tab-pane>
  </cap-tabs>
</template>
```
:::
## Step Wizard

Examples:

<demo-step-wizard ></demo-step-wizard>

::: details Preview the code
```vue
<template>
  <cap-tabs>
    <template v-slot:header="{ activeIndex, totalTabs }">
      steps wizard - step {{ activeIndex + 1 }}/{{ totalTabs }}
    </template>
    <cap-tab-pane name="Step one" :selected="true">
      <span>This is Step one</span>
    </cap-tab-pane>
    <cap-tab-pane name="Step two" :selected="false">
      <span>this is Step two</span>
    </cap-tab-pane>
    <cap-tab-pane name="Step three" :selected="false">
      <span>this is Step three</span>
    </cap-tab-pane>
  </cap-tabs>
</template>

```
:::
