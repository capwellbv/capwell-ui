<template>
  <cap-button :varient="`${muted? muted: ''} icon`">
      Icon Button
      <template #icon>
          <plus-icon size="1.2x"></plus-icon>
      </template>
  </cap-button>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons'

export default {
    name: 'DemoIconButton',
    props: {
        muted: String
    },
    components: {
        PlusIcon,
    },
}
</script>