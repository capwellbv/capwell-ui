<template>
  <default-button>
      <slot/>

  </default-button>
</template>

<script>
import DefaultButton from './DefaultButton'

export default {
    components: {
        DefaultButton
    }
}
</script>