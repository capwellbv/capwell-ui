<template>
  <cap-input
    v-model="value"
    placeholder="input with icon"
    size="large"
  >
    <template #icon>
      <user-icon size="1.2x" class="icon"></user-icon>
    </template>
  </cap-input>
</template>

<script>
import { UserIcon } from "vue-feather-icons";
export default {
  name: "DemoInputIcon",
  data() {
    return {
      value: ""
    };
  },
  components: {
    UserIcon
  }
};
</script>