<template>
  <cap-tabs :footer="false" style="margin-top: 20px">
    <cap-tab-content name="Tab one" :selected="true">
      <span>this is tab one</span>
    </cap-tab-content>
    <cap-tab-content name="Tab two" :selected="false">
      <span>this is tab two</span>
    </cap-tab-content>
    <cap-tab-content name="Tab three" :selected="false">
      <span>this is tab three</span>
    </cap-tab-content>
  </cap-tabs>
</template>

<script>

export default {
  name: "DemoTabs",
};
</script>