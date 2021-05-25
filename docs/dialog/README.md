# Dialog

<demo-dialog></demo-dialog>

::: details Preview the code

```vue
<template>
  <div>
    <cap-button varient="secondary"
        size="sm"
        font="bold" @click="showSuccess = true">Show success dialog</cap-button>
    <cap-dialog
      :showDialog="showSuccess"
      @close="showSuccess = false"
      type="success"
      message="Dankjewel voor je bericht, een van onze specialisten neemt zo spoedig mogelijk contact met je op!"
    >
    </cap-dialog>
    <cap-button varient="secondary"
        size="sm"
        font="bold" @click="showError = true">Show error dialog</cap-button>
    <cap-dialog
      :showDialog="showError"
      @close="showError = false"
      type="error"
      :message="['The given data was invalid.']"
    >
    </cap-dialog>
  </div>
</template>

<script>
import CapDialog from '../../../src/components/CapDialog.vue'
export default {
  name: 'DemoDialog',
  components: { CapDialog },
  data() {
    return {
      showSuccess: false,
      showError: false
    }
  }
}
</script>


```

:::
