<template>
	<cap-input
		v-model="value"
		placeholder="rounded input"
		rounded
	></cap-input>
</template>

<script>
export default {
  name: "DemoInputRounded",
  data() {
    return {
      value: ""
    };
  }
};
</script>