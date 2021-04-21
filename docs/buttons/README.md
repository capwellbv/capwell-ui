# Buttons

## Buttons varients

Examples:

<cap-button varient="primary" size="xl">Primary</cap-button>
<cap-button varient="secondary" size="xl">Secondary</cap-button>
<cap-button varient="disabled" size="lg">disabled</cap-button>
<cap-button varient="disabled" size="md">disabled</cap-button>
<cap-button varient="disabled" size="sm">disabled</cap-button>

::: details Preview the code
```vue
<cap-button varient="primary" size="xl">Primary</cap-button>
<cap-button varient="secondary" size="xl">Secondary</cap-button>
<cap-button varient="disabled" size="lg">disabled</cap-button>
<cap-button varient="disabled" size="md">disabled</cap-button>
<cap-button varient="disabled" size="sm">disabled</cap-button>
```
:::


## Icon buttons

Examples:

<cap-icon-button ></cap-icon-button>

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

<cap-icon-button muted="muted" ></cap-icon-button>

## Circle buttons

Examples:

<cap-button varient="circle" size="xl" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="lg" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="md" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="sm" ><span class="icon">></span></cap-button>

::: details Preview the code
```vue
<cap-button varient="circle" size="xl" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="lg" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="md" ><span class="icon">></span></cap-button>
<cap-button varient="circle" size="sm" ><span class="icon">></span></cap-button>
```
:::
