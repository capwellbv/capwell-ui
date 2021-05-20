<template>
	<cap-input
		v-model="value"
		placeholder="input with error"
		error="this is error text"
	></cap-input>
</template>

<script>
export default {
  name: "DemoInputError",
  data() {
    return {
      value: ""
    };
  }
};
</script>