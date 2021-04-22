<template>
    <div :class="['modal', {'modal-hide': !show, 'modal-show': show}]">
        <div class="modal-content">
            <x-icon @click="dismiss" size="2x" class="close-icon"></x-icon>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { XIcon } from 'vue-feather-icons'

export default {
 props: {
    show: { default: false }
  },

  components: {
        XIcon,
  },

  mounted() {
    const escapeHandler = e => {
      if (e.key === "Escape" && this.show) {
        this.dismiss();
      }
    };
    document.addEventListener("keydown", escapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", escapeHandler);
    });
  },

  methods: {
    dismiss() {
      this.$emit("close");
    }
  }
}
</script>

<style scoped lang="scss">
    @import '../css/modal.scss';
</style>