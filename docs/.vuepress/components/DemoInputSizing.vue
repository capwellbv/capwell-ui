<template>
  <div>
    <cap-input
      v-model="value"
      placeholder="large input"
      size="large"
      style="margin-top:20px;"
    ></cap-input>
    <cap-input
      v-model="value"
      placeholder="medium input"
      size="medium"
      style="margin-top:20px;"
    ></cap-input>
    <cap-input
      v-model="value"
      placeholder="small input"
      size="small"
      style="margin-top:20px;"
    ></cap-input>
  </div>
</template>

<script>
export default {
  name: "DemoInputSizing",
  data() {
    return {
      value: ""
    };
  }
};
</script>