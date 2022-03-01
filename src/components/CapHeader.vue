<template>
  <header class="cap-ui cap-header" :style="`background-image: url(${backgroundImage});`">
    <cap-container>
      <div class="content-container">
        <slot v-bind="{ title, subTitle }">
          <cap-title tag="h1" type="heading" font="bold" size="1" class="header-title">
            {{ title }}<span class="underscore">_</span>
          </cap-title>
          <cap-text size="lead" font="300" class="header-lead-text">
            {{ subTitle }}
          </cap-text>
        </slot>
      </div>
    </cap-container>
  </header>
</template>

<script>
import CapContainer from './CapContainer.vue';

export default {
  name: "CapHeader",
  components: {
    CapContainer
  },
  props: {
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    },
  }
}
</script>