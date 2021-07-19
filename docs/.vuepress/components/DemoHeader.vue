<template>
  <div>
    <cap-header>
      <template #logo>
        <cap-navbar-brand>logo</cap-navbar-brand>
      </template>
      <cap-nav-item  v-for="(item, index) in items" :key="index">
        <a :href="item.slug" class="link">{{item.name}}</a>
      </cap-nav-item>
      <cap-button varient="primary">Registered</cap-button>
    </cap-header>
  </div>
</template>

<script>
import CapButton from '../../../src/components/CapButton.vue';
import CapNavbarBrand from '../../../src/components/CapNavbarBrand.vue';
import CapNavItem from '../../../src/components/CapNavItem.vue';
import CapNavBarNav from '../../../src/components/CapNavBarNav.vue';
export default {
  name: 'DemoHeader',
  components: {
    CapButton,
    CapNavbarBrand,
    CapNavItem,
    CapNavBarNav
  },
  data() {
    return {
      items: [
        {name: 'Home', slug: '#'},
        {name: 'About', slug: '#'},
        {name: 'Contact', slug: '#'},
        {name: 'Serviecs', slug: '#'}
      ]
    }
  }
}
</script>