# Card

## Card

medium card 

<template>
  <cap-card size="medium" >
      <template #body>
        <cap-title type="subheading" class="subtitle" size="2">subtitle 2</cap-title>
        <cap-title type="heading" size="6" class="title">Header Title 4</cap-title>
      </template>
  </cap-card>
</template>

small card 

<template>
  <cap-card size="small" >
      <template #body>
        <cap-title type="subheading" class="subtitle" size="2">subtitle 2</cap-title>
        <cap-title type="heading" size="6" class="title">Header Title 4</cap-title>
      </template>
  </cap-card>
</template>



::: details Preview the code
```vue
<template>
  <cap-card src="" size="">
      <template #body>
        <cap-title type="subheading" class="subtitle" size="2">subtitle 2</cap-title>
        <cap-title type="heading" size="6" class="title">Header Title 4</cap-title>
        <cap-text size="5" class="text">...</cap-text>
      </template>
  </cap-card>
</template>
```
:::