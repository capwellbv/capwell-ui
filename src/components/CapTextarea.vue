<template>
  <textarea
    v-model="textarea"
    :placeholder="placeholder"
    rows="6"
    @input="handleInput"
    class="cap-textarea"
    :class="[{ disabled: disabled}]"
  ></textarea>
</template>

<script>
export default {
  name: "CapTextarea",
  data() {
    return {
      textarea: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "Type value...",
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.textarea);
    },
  },
};
</script>
