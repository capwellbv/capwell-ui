<template>
  <div>
    <cap-button varient="primary" size="xl" font="bold">Primary</cap-button>
    <cap-button varient="secondary" size="xl" font="medium">Secondary</cap-button>
    <cap-button varient="disabled" size="lg" transform="uppercase" font="normal">disabled</cap-button>
    <cap-button varient="disabled" size="md" transform="lowercase">disabled</cap-button>
    <cap-button varient="disabled" size="sm" transform="capitalize">disabled</cap-button>
  </div>
</template>

<script>
export default {
  name: "DemoButton",
};
</script>
