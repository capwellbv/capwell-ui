<template>
  <div class="theme-container">
    <demo-navbar></demo-navbar>
    <main>
      <Content />
    </main>
    <demo-footer></demo-footer>
  </div>
</template>

<script>
import DemoNavbar from './DemoNavbar.vue';
import DemoFooter from './DemoFooter.vue';

export default {
  name: "CustomLayout",
  components: {
    DemoNavbar,
    DemoFooter,
  }
};
</script>
