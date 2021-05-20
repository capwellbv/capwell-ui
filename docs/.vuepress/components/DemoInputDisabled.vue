<template>
	<cap-input
		v-model="value"
		placeholder="disabled input"
		disabled
	></cap-input>
</template>

<script>
export default {
  name: "DemoInputDisabled",
  data() {
    return {
      value: ""
    };
  }
};
</script>