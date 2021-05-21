# Slider

<demo-slider></demo-slider>

::: details Preview the code

```vue
<template>
  <div>
    <cap-slider :items="items">
      <cap-card
        :bordered="true"
        :nopadding="true"
        size=""
        class="panel"
        style="padding: 1rem"
        v-for="(item, index) in items"
        :key="index"
      >
        <template #body>
          <cap-title
            style="color: #0076a4"
            type="subheading"
            size="3"
            transform="uppercase"
            font="bold"
            >{{ item.title }}</cap-title
          >
          <cap-title type="heading" size="6" font="medium">{{
            item.description
          }}</cap-title>
        </template>
      </cap-card>
    </cap-slider>
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
