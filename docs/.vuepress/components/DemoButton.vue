<template>
  <div>
    <cap-button style="margin-top:20px;" varient="primary" size="xl" font="bold">Primary</cap-button>
    <cap-button style="margin-top:20px;" varient="secondary" size="xl" font="bold">Secondary</cap-button>
    <div>
      <cap-button style="margin-top:20px;" outline size="lg" varient="primary">Outlined primary</cap-button>
      <cap-button style="margin-top:20px;" outline size="lg" varient="secondary">Outlined secondary</cap-button>
    </div>
    <cap-button style="margin-top:20px;" disabled size="md" varient="secondary" transform="lowercase">disabled</cap-button>
    <cap-button style="margin-top:20px;" disabled size="sm" transform="capitalize">disabled</cap-button>
  </div>
</template>

<script>
export default {
  name: "DemoButton",
};
</script>
