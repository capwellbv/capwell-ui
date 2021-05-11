<template>
  <div>
    <cap-tabs>
      <cap-tab-pane name="Tab one" :selected="true">
        <span>this is tab one.</span>
      </cap-tab-pane>
      <cap-tab-pane name="Tab two" :selected="false">
        <span>this is tab two.</span>
      </cap-tab-pane>
      <cap-tab-pane name="Tab three" :selected="false">
        <span>this is tab three.</span>
      </cap-tab-pane>
    </cap-tabs>
  </div>
</template>

<script>

export default {
  name: "DemoTabs",
};
</script>