<template>
  <div class="cap-ui cap-navbar" :class="{ down: hasScrolled, shadow: showShadow, collapse: isCollapsed, shown: !closed }">
    <cap-container>
      <nav :class="{ open: !closed }">
        <div class="cap-nav-container">
          <div class="cap-navbar-brand">
            <slot name="brand" v-bind="{ logo }">
              <img :src="logo" alt="logo">
            </slot>
          </div>
          <div class="toggle-btn">
            <slot name="toggle" v-bind="{ toggleMenu, closed }">
              <align-justify-icon size="25" v-if="closed" @click.prevent="toggleMenu" class="toggle-icon"></align-justify-icon>
              <x-icon size="25" v-else @click.prevent="toggleMenu" class="toggle-icon"></x-icon>
            </slot>
          </div>
        </div>
        <div class="cap-navbar-nav" :class="{ shown: !closed }">
          <ul class="cap-navbar-links">
            <slot />
          </ul>
          <ul v-if="isCollapsed" class="cap-navbar-contact">
            <slot name="contact"></slot>
          </ul>
        </div>
      </nav>
    </cap-container>
  </div>
</template>

<script>
import { AlignJustifyIcon, XIcon } from 'vue-feather-icons';
import CapContainer from './CapContainer.vue';

export default {
  name: 'CapNavbar',
  props: {
    logo: {
      type: String,
      default: null
    },
    collapse: {
      type: String | Number,
      default: 1040
    },
  },
  data() {
    return {
      closed: false,
      hasScrolled: false,
      showShadow: false,
      prevScrollTop: 85,
      isCollapsed: false
    };
  },
  components: {
    CapContainer,
    AlignJustifyIcon,
    XIcon
  },

  watch: {
    $route: {
      handler() {
        this.closed = true;
      }
    }
  },

  mounted() {
    this.checkMedia();
    window.addEventListener("resize", this.checkMedia);
    window.addEventListener("scroll", this.showNavbar);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMedia);
    window.removeEventListener("scroll", this.showNavbar);
  },

  methods: {
    toggleMenu() {
      this.closed = !this.closed;
    },

    checkMedia() {
      let mql = window.matchMedia(`(max-width: ${this.collapse}px)`);

      if (mql.matches) {
        this.isCollapsed = true
      } else {
        this.isCollapsed = false
      }

      if (mql.matches && !this.closed) {
        this.closed = true;
        this.prevScrollTop = 65;
      } else if (!mql.matches && this.closed) {
        this.closed = false;
        this.prevScrollTop = 85;
      }
    },

    showNavbar() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < 1) {
        this.hasScrolled = false;
        this.showShadow = false;
        return;
      }

      if (scrollTop < 85) {
        this.prevScrollTop = 85;
        return;
      }

      if (scrollTop > this.prevScrollTop) {
        this.hasScrolled = true;
        this.showShadow = false;
      } else {
        this.hasScrolled = false;
        this.showShadow = true;
      }

      this.prevScrollTop = scrollTop;
    }
  }
};
</script>