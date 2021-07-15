# Navbar

<router-link to="/headerfooter" target="_blank">Click Here to view Navbar<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></router-link>

::: details Preview the code

```vue
<template>
  <cap-navbar
    logo="https://beta.capwell.nl/img/logo.56bf7503.svg"
  >
    <cap-nav-item  v-for="(item, index) in items" :key="index">
      <a :href="item.slug" class="link" :class="{'router-link-exact-active': item.name === activeItem}" @click="activeItem = item.name">{{item.name}}</a>
    </cap-nav-item>
    <cap-button varient="secondary" size="lg" class="nav-btn">Inschrijven als IT-specialist</cap-button>
    <template slot="contact">
      <cap-nav-contact-item
        target="_blank"
        href="https://www.google.com/maps/place/Capwell+BV/@51.8993259,4.3981854,15z/data=!4m5!3m4!1s0x0:0xafffdbfedfd01a0d!8m2!3d51.8993259!4d4.3981854"
      >
        <home-icon size="18" class="icon"></home-icon>
      </cap-nav-contact-item>
      <cap-nav-contact-item href="mailto:algemeen@capwell.nl">
        <mail-icon size="18" class="icon"></mail-icon>
      </cap-nav-contact-item>
      <cap-nav-contact-item href="tel:010-475 55 83">
        <phone-icon size="18" class="icon"></phone-icon>
      </cap-nav-contact-item>
      <cap-nav-contact-item href="https://www.linkedin.com/company/capwell/" target="_blank">
        <linkedin-icon size="18" class="icon"></linkedin-icon>
      </cap-nav-contact-item>
    </template>
  </cap-navbar>
</template>

<script>
import CapButton from '../../../src/components/CapButton.vue';
import CapNavItem from '../../../src/components/CapNavItem.vue';
import { MailIcon, PhoneIcon, LinkedinIcon, HomeIcon } from 'vue-feather-icons';

export default {
  name: 'DemoNavbar',
  components: {
    CapButton,
    CapNavItem,
    MailIcon,
		PhoneIcon,
		LinkedinIcon,
		HomeIcon
  },
  data() {
    return {
      activeItem: 'home',
      items: [
        {name: 'Home', slug: '#'},
        {name: 'Vind IT-specialisten', slug: '#'},
        {name: 'Werkwijze', slug: '#'},
        {name: 'Over ons', slug: '#'},
        {name: 'Blog', slug: '#'},
      ]
    }
  }
}
</script>
```

:::
