# Slider

<demo-slider></demo-slider>

::: details Preview the code

```vue
<template>
  <div>
    <cap-slider :items="items" routerName="router name">
      <template v-slot:content="{item}">
        <cap-title
          tag="h6"
          type="subheading"
          size="2"
          transform="uppercase"
          font="700"
          class="slider-title"
          >{{item.title}}</cap-title
        >
        <cap-title
          tag="p"
          font="500"
          class="h4 slider-description"
          >{{item.description}}</cap-title
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
