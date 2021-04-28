<template>
  <div class="cap-header" :class="{ down: hasScrolled, shadow: showShadow }">
    <div class="cap-grid-container">
      <nav :class="{ open: !closed }">
        <div class="cap-nav-container">
          <slot name="logo"></slot>
          <align-justify-icon size="1.3x" v-if="closed" @click.prevent="toggleMenu" class="menu-icon"></align-justify-icon>
          <x-icon size="1.3x" v-else @click.prevent="toggleMenu" class="close-icon"></x-icon>
        </div>
        <ul class="cap-nav-item-list" :class="{ shown: !closed }">
         <slot />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { AlignJustifyIcon, XIcon } from 'vue-feather-icons'

export default {
  name: 'CapHeader',
  data() {
    return {
      closed: false,
      hasScrolled: false,
      showShadow: false,
      prevScrollTop: 85
    };
  },
  components: {
    AlignJustifyIcon,
    XIcon
  },

  mounted() {
    this.checkMedia();
    window.onresize = this.checkMedia;
    window.addEventListener("scroll", this.showNavbar);
  },

  methods: {
    toggleMenu() {
      this.closed = !this.closed;
    },

    checkMedia() {
      let mql = window.matchMedia("(max-width: 1040px)");

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

<style scoped lang="scss" >
@import '../css/header.scss';
</style>