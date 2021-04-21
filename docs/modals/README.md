# Modals

## Base modal

Basic modal example:

<Modal></Modal>

::: details Preview the code
```vue
<template>
    <div>
        <DefaultButton varient="secondary" size="xl" @click="show = true">Show modal</DefaultButton>
        <CapModal :show="show" @close="show = false">
            <h1>Demo modal...</h1>
        </CapModal>
    </div>
</template>

<script>
import { DefaultButton, CapModal } from 'capwell-ui'
export default {
    data() {
        return {
            show: false
        }
    },


    components: {
        CapModal,
        DefaultButton
    }
}
</script>
```
:::