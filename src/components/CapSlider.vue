<template>
  <div class="cap-ui cap-slider">
    <cap-button
      v-show="items.length > 3 && !disableLeft"
      @click="slideLeft"
      varient="circle"
      size="lg"
      class="navigation-btn left"
      style="margin-left: auto"
      aria-label="Move images to left"
    >
      <chevron-left-icon size="25" class="navigation-icon icon"></chevron-left-icon>
    </cap-button>
    <div ref="slider" class="cap-panel-slider hide-scrollbar">
      <cap-card
        :bordered="true"
        :nopadding="true"
        class="panel"
        v-for="(item, index) in items"
        :key="item.title + index"
        @click.native="$emit('onItemClick', item)"
      >
        <template #body>
          <slot name="content" v-bind:item="item">
            <cap-title
              tag="h6"
              type="subheading"
              size="2"
              transform="uppercase"
              font="700"
              class="slider-title"
              >{{item.title}}</cap-title
            >
            <cap-title
              tag="p"
              font="500"
              class="h4 slider-description"
              >{{item.description}}</cap-title
            >
          </slot>
        </template>
        <template #footer>
          <slot name="cardFooter" v-bind:item="item">
            <arrow-right-icon size="1.2x" class="footer-icon"></arrow-right-icon>
          </slot>
        </template>
      </cap-card>
      <slot></slot>
    </div>
    <cap-button
      v-if="items.length > 3 && !disableRight"
      @click="slideRight"
      varient="circle"
      size="lg"
      type="button"
      class="navigation-btn right"
      aria-label="Move images to right"
    >
    <!-- <button
      v-if="items.length > 3 && !disableRight"
      @click="slideRight"
      type="button"
      class="navigation-btn right"
    > -->
      <chevron-right-icon size="25" class="navigation-icon icon"></chevron-right-icon>
    <!-- </button> -->
    </cap-button>
  </div>
</template>

<script>
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowRightIcon,
} from "vue-feather-icons";
import CapText from "./CapText.vue";
import CapTitle from "./CapTitle.vue";
import CapCard from "./CapCard.vue";
export default {
  name: "CapSlider",
  props: {
    items: {
      type: [Array, Object],
    },
  },
  data() {
    return {
      disableLeft: false,
      disableRight: false,
      slides: 3,
      currentSlide: 0,
    };
  },
  components: {
    ChevronRightIcon,
    ChevronLeftIcon,
    ArrowRightIcon,
    CapTitle,
    CapText,
    CapCard,
  },
  mounted() {
    if (this.checkMedia()) {
      this.$refs.slider.addEventListener("scroll", this.enableButton);
    }
    if (window.innerWidth > 1900) {
      this.slides = 4;
      this.selectSlides();
    } else if (window.innerWidth > 1300) {
      this.slides = 3;
      this.selectSlides();
    }
  },
  methods: {
    enableButton() {
      const slider = this.$refs.slider;

      if (slider.scrollLeft < 300) {
        this.disableLeft = true;
      } else {
        this.disableLeft = false;
      }

      if (slider.scrollWidth - slider.scrollLeft - slider.offsetWidth < 300) {
        this.disableRight = true;
      } else {
        this.disableRight = false;
      }
    },

    checkMedia() {
      let mql = window.matchMedia("(min-width: 1300px)");
      if (mql.matches) {
        return true;
      }
      return false;
    },

    slideLeft() {
      this.$refs.slider.scrollLeft -= 400;
      const panels = document.querySelectorAll(".panel");
      this.currentSlide--;
      panels[this.currentSlide].classList.remove("transparent");
      panels[this.currentSlide + this.slides]?.classList.add("transparent");
    },

    slideRight() {
      this.$refs.slider.scrollLeft += 400;
      const panels = document.querySelectorAll(".panel");
      panels[this.currentSlide].classList.add("transparent");
      panels[this.currentSlide + this.slides]?.classList.remove("transparent");
      this.currentSlide++;
    },

    selectSlides() {
      const panels = document.querySelectorAll(".panel");
      for (let i = this.slides; i < panels.length; i++) {
        const panel = panels[i];
        panel.classList.add("transparent");
      }
    },
  },

  beforeDestroy() {
    this.$refs.slider.removeEventListener("scroll", this.enableButton);
  },
};
</script>
