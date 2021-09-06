# Buttons

## Buttons varients

Examples:

<demo-button></demo-button>

::: details Preview the code
```vue
<template>
  <div>
    <cap-button varient="primary" size="xl" font="bold">Primary</cap-button>
    <cap-button varient="secondary" size="xl" font="bold">Secondary</cap-button>
    <cap-button varient="primary" outline size="lg">Outlined primary</cap-button>
    <cap-button varient="secondary" outline size="lg">Outlined secondary</cap-button>
    <cap-button varient="secondary" disabled size="md" transform="lowercase">disabled</cap-button>
    <cap-button disabled size="sm" transform="capitalize">disabled</cap-button>
  </div>
</template>

```
:::


## Icon buttons

Examples:

<demo-icon-button ></demo-icon-button>

for icons please refer to following [library](https://vue-feather-icons.egoist.sh/)

::: details Preview the code
```vue
<template>
  <cap-button varient="icon">
      Icon Button
      <template #icon>
          <plus-icon size="1.2x"></plus-icon>
      </template>
  </cap-button>
</template>

<script>
import { CapButton } from 'capwell-ui'
import { PlusIcon } from 'vue-feather-icons'

export default {
    components: {
        PlusIcon,
        CapButton
    },
}
</script>
```
:::

## Muted buttons

Examples:

<demo-icon-button muted="muted" ></demo-icon-button>

## Circle buttons

Examples:

<cap-button varient="circle" size="xl" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="lg" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="md" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="sm" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="lg" disabled ><span class="icon">></span></cap-button>

::: details Preview the code
```vue
<cap-button varient="circle" size="xl" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="lg" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="md" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="sm" ><span class="icon">></span></cap-button>
```
:::
