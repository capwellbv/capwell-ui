# Slider

<demo-slider></demo-slider>

::: details Preview the code

```vue
<template>
  <div>
    <cap-slider :items="items" routerName="router name">
      <template v-slot:content="{item}">
        <cap-title
          type="subheading"
          size="4"
          transform="uppercase"
          font="bold"
          class="slider-title"
          >{{ item.title }}</cap-title
        >
        <cap-title
          type="heading"
          size="7"
          font="medium"
          class="slider-description"
          >{{ item.description }}</cap-title
        >
      </template></cap-slider
    >
  </div>
</template>

<script>
 data() {
	return {
     items: [
       {slug: '#', title: '', description: ''},
       {slug: '#', title: '', description: ''},
       {slug: '#', title: '', description: ''},
     ]
	};
},
</script>
```

:::
