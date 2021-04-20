<template>
  <default-button varient="icon">
      Icon Button
      <template #icon>
          <plus-icon size="1.2x"></plus-icon>
      </template>
  </default-button>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons'

export default {
    components: {
        PlusIcon,
    },
}
</script>