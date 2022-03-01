<template>
  <div :id="id" class="cap-ui cap-carousel">
    <div class="carousel-items-wrapper">
      <div
        @mouseover="handleHover"
        @mouseleave="handleHoverout"
        :key="i"
        v-for="(item, i) in items"
        :class="['carousel-item', { active: selectedIndex === i }]"
        :style="`position:${i == selectedIndex ? 'relative' : 'absolute'};min-height: ${minHeight}px;`"
      >
        <div class="carousel-item-content">
          <slot v-bind="{ item, selectedIndex, index: i }">
            <img :src="item.logo" alt="Client logo" />
            <cap-title
              tag="h6"
              type="subheading"
              font="700"
              size="2"
              class="subtitle-2"
            >
              {{ item.info }}
            </cap-title>
            <cap-text size="6" font="500" class="lead-text">
              {{ item.text }}
            </cap-text>
          </slot>
        </div>
      </div>
      <div class="backdrop"></div>
    </div>
    <div class="carousel-indicators">
      <div
        v-for="i in items.length"
        :key="i"
        @click="changeItem(i - 1)"
        :class="['circle', { active: selectedIndex === i - 1 }]"
      >
        <slot name="indicator" v-bind="{ index: i, changeItem, selectedIndex }"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CapCarousel',
  props: {
    id: {
      type: String,
      default: null,
      required: true
    },
    duration: {
      type: Number,
      default: 10000
    },
    items: {
      type: Array,
      default: ()=> {
        return []
      }
    }
  },
  data() {
    return {
      selectedIndex: 0,
      minHeight: 0,
      touchPauseSlider: false
    }
  },
  watch: {
    items: {
      handler() {
        this.getHeight();
      }
    }
  },
  mounted() {
    this.startSlide();
    window.addEventListener("touchstart", this.handleTouchStart, false);
    window.addEventListener("touchend", this.handleTouchEnd, false);
    this.getHeight();
  },

  beforeDestroy() {
    window.removeEventListener("touchstart", this.handleTouchStart, false);
    window.removeEventListener("touchend", this.handleTouchEnd, false);
  },
  methods: {
    handleHover(e) {
      let element = document.querySelector(`#${this.id} .carousel-item.active`);
      if (e.target && (element.contains(e.target) || e.target == element)) {
        clearInterval(this.timer);
      }
    },
    handleHoverout(e) {
      let element = document.querySelector(`#${this.id} .carousel-item.active`);
      if (e.target && (element.contains(e.target) || e.target == element)) {
        this.startSlide();
      }
    },
    changeItem(index) {
      clearInterval(this.timer);
      this.selectedIndex = index;
      this.startSlide();
    },
    startSlide() {
      this.timer = setInterval(this.nextSlide, this.duration);
    },
    handleTouchStart(e) {
      let element = e.target;
      let activeSlide = document.querySelector(`#${this.id} .carousel-item.active`);
      if (
        !this.touchPauseSlider &&
        activeSlide &&
        (activeSlide.contains(element) || element == activeSlide)
      ) {
        clearInterval(this.timer);
        this.touchPauseSlider = true;
      }
    },
    handleTouchEnd() {
      if (this.touchPauseSlider) {
        this.touchPauseSlider = false;
        this.startSlide();
      }
    },
    nextSlide() {
      if (this.selectedIndex === 3) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex += 1;
      }
    },
    getHeight() {
      const children = document.querySelectorAll(`#${this.id} .carousel-item`);
      children.forEach(item => {
        const paddingTop = getComputedStyle(item)['padding-top'].replace('px', '');
        const paddingBottom = getComputedStyle(item)['padding-bottom'].replace('px', '');
        if ((item.clientHeight - paddingTop - paddingBottom) > this.minHeight) {
          this.minHeight = item.clientHeight - paddingTop - paddingBottom;
        }
      });
    }
  }
};
</script>