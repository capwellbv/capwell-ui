<template>
  <div>
    <cap-dialog buttonText="Model Open" role="info" style="margin-top: 20px">
      <div>
        <p>Are you sure to want to delete it</p>
      </div>
    </cap-dialog>
    <cap-dialog buttonText="Model Open" role="success" style="margin-top: 20px">
      <div>
        <p>Are you sure to want to delete it</p>
      </div>
    </cap-dialog>
    <cap-dialog buttonText="Model Open" role="error" style="margin-top: 20px">
      <div>
        <p>Are you sure to want to delete it</p>
      </div>
    </cap-dialog>
  </div>
</template>

<script>
import CapDialog from '../../../src/components/CapDialog.vue'
export default {
  components: { CapDialog },
  name: 'Dialog'
}
</script>