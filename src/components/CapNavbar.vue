<template>
  <div class="cap-ui cap-navbar" :class="{ down: hasScrolled, shadow: showShadow, collapse: isCollapsed }">
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
        <div class="cap-navbar-nav">
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
    deltaScroll: {
      type: Number,
      default: 40
    },
  },
  data() {
    return {
      closed: false,
      hasScrolled: false,
      showShadow: false,
      isCollapsed: false,
      prevTop: 0,
      interval: null,
      didScroll: false
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
    this.interval = setInterval(() => {
      if (this.didScroll) {
        this.handleScroll();
        this.didScroll = false;
      }
    }, 250);
    window.addEventListener("resize", this.checkMedia);
    window.addEventListener("scroll", this.showNavbar);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMedia);
    window.removeEventListener("scroll", this.showNavbar);
    clearInterval(this.interval);
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
      } else if (!mql.matches && this.closed) {
        this.closed = false;
      }
    },
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const navHeight = document.querySelector(".cap-ui.cap-navbar")
        .clientHeight;
      if (st < 1) {
        this.hasScrolled = false;
        this.showShadow = false;
        return;
      }
      if (Math.abs(this.prevTop - st) <= this.deltaScroll) return;
      if (st > this.prevTop && st > navHeight - 10) {
        this.hasScrolled = true;
      } else {
        this.showShadow = true;
        this.hasScrolled = false;
      }
      this.prevTop = st;
    },

    showNavbar() {
      this.didScroll = true;
    }
  }
};
</script>