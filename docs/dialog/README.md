# Dialog

<demo-dialog></demo-dialog>

::: details Preview the code

```vue
<template>
  <div>
    <cap-button varient="secondary"
        size="lg"
        font="bold" @click="showSuccess = true">Show success dialog
    </cap-button>
    <cap-info-dialog
      :show="showSuccess"
      @close="showSuccess = false"
      message="Dankjewel voor je bericht, een van onze specialisten neemt zo spoedig mogelijk contact met je op!"
    >
    </cap-info-dialog>
    <cap-button varient="secondary"
        size="lg"
        font="bold" @click="showError = true">
        Show error dialog
    </cap-button>
    <cap-danger-dialog
      :show="showError"
      @close="showError = false"
      message="The given data was invalid."
    >
    </cap-danger-dialog>
  </div>
</template>

<script>
export default {
  name: 'DemoDialog',
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
