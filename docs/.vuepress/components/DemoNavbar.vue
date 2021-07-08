<template>
  <div>
    <cap-navbar>
      <template #logo>
        <cap-navbar-brand>
          <img src="https://beta.capwell.nl/img/logo.56bf7503.svg" alt="Capwell Logo">
        </cap-navbar-brand>
      </template>
      <cap-nav-item  v-for="(item, index) in items" :key="index">
        <a :href="item.slug" class="link" :class="{'active': item.name === activeItem}" @click="activeItem = item.name">{{item.name}}</a>
      </cap-nav-item>
      <cap-button varient="secondary" size="md">Registered</cap-button>
    </cap-navbar>
  </div>
</template>

<script>
import CapButton from '../../../src/components/CapButton.vue';
import CapNavbarBrand from '../../../src/components/CapNavbarBrand.vue';
import CapNavItem from '../../../src/components/CapNavItem.vue';
import CapNavBarNav from '../../../src/components/CapNavBarNav.vue';
export default {
  name: 'DemoNavbar',
  components: {
    CapButton,
    CapNavbarBrand,
    CapNavItem,
    CapNavBarNav
  },
  data() {
    return {
      activeItem: 'home',
      items: [
        {name: 'home', slug: '#'},
        {name: 'about', slug: '#'},
        {name: 'contact', slug: '#'},
        {name: 'services', slug: '#'}
      ]
    }
  }
}
</script>
