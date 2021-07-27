# Header

<router-link to="/headerFooter" target="_blank">Click Here to view Header<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></router-link>

::: details Preview the code

```vue
<template>
  <div>
    <cap-header
      :title="title"
      :sub-title="para"
      background-image="https://beta.capwell.nl/img/bg_content-xl.a825db9b.jpg"
    >
    </cap-header>
  </div>
</template>

<script>
import CapHeader from '../../../src/components/CapHeader.vue'
export default {
  name: 'DemoHeader',
  components: {
    CapHeader
  },
  data() {
    return {
      title: "Vind je IT-specialist",
      para: "We werken rechtstreeks voor eindklanten. Bij ons dus geen tussenschakels en lange inhuurketens! Zo houden we het hele proces zelf in de hand. En waarborgen we de kwaliteit waarvoor we staan."
    }
  },
}
</script>
```

:::
