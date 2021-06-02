<template>
<div>
  <cap-floating-label-input
    v-model="errorinputvalue"
    placeholder="Input Label"
    label="Input Label"
    error="this is error text"
  ></cap-floating-label-input>
	<cap-input
		v-model="value"
		placeholder="input with error"
		error="this is error text"
	></cap-input>
</div>
</template>

<script>
export default {
  name: "DemoInputError",
  data() {
    return {
      errorinputvalue : "",
      value: ""
    };
  }
};
</script>