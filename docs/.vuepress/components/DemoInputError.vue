<template>
<div>
  <cap-input-label
    v-model="errorinputvalue"
    placeholder="Input Label"
    label="Input Label"
    error="this is error text"
  ></cap-input-label>
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