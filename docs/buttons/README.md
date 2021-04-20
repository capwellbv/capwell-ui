# Buttons

## Buttons varients

Examples:

<DefaultButton varient="primary" size="xl">Primary</DefaultButton>
<DefaultButton varient="secondary" size="xl">Secondary</DefaultButton>
<DefaultButton varient="disabled" size="lg">disabled</DefaultButton>
<DefaultButton varient="disabled" size="md">disabled</DefaultButton>
<DefaultButton varient="disabled" size="sm">disabled</DefaultButton>

::: details Preview the code
```vue
<DefaultButton varient="primary" size="xl">Primary</DefaultButton>
<DefaultButton varient="secondary" size="xl">Secondary</DefaultButton>
<DefaultButton varient="disabled" size="lg">disabled</DefaultButton>
<DefaultButton varient="disabled" size="md">disabled</DefaultButton>
<DefaultButton varient="disabled" size="sm">disabled</DefaultButton>
```
:::


## Icon buttons

Examples:

<IconButton></IconButton>

for icons please refer to following [library](https://vue-feather-icons.egoist.sh/)

::: details Preview the code
```vue
<template>
  <default-button varient="icon">
      Icon Button
      <template #icon>
          <plus-icon size="1.2x"></plus-icon>
      </template>
  </default-button>
</template>

<script>
import { DefaultButton } from 'capwell-ui'
import { PlusIcon } from 'vue-feather-icons'

export default {
    components: {
        PlusIcon,
        DefaultButton
    },
}
</script>
```
:::

## Muted buttons

Examples:

<IconButton></IconButton>

## Circle buttons

Examples:

<DefaultButton varient="circle" size="xl" ><span class="icon">></span></DefaultButton>
<DefaultButton varient="circle" size="lg" ><span class="icon">></span></DefaultButton>
<DefaultButton varient="circle" size="md" ><span class="icon">></span></DefaultButton>
<DefaultButton varient="circle" size="sm" ><span class="icon">></span></DefaultButton>

::: details Preview the code
```vue
<DefaultButton varient="circle" size="xl" ><span class="icon">></span></DefaultButton>
<DefaultButton varient="circle" size="lg" ><span class="icon">></span></DefaultButton>
<DefaultButton varient="circle" size="md" ><span class="icon">></span></DefaultButton>
<DefaultButton varient="circle" size="sm" ><span class="icon">></span></DefaultButton>
```
:::
