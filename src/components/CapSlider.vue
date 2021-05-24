<template>
  <div class="cap-ui cap-slider">
    <button
      v-if="items.length > 3"
      @click="slideLeft"
      :disabled="disableLeft"
      type="button"
      class="navigation-btn left"
      style="margin-left: auto"
    >
      <chevron-left-icon size="1.5x" class="navigation-icon"></chevron-left-icon>
    </button>
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
          <cap-title
            type="subheading"
            size="4"
            transform="uppercase"
            font="bold"
            class="slider-title"
            >{{item.title}}</cap-title
          >
          <cap-title
            type="heading"
            size="7"
            font="medium"
            class="slider-description"
            >{{item.description}}</cap-title
          >
        </template>
        <template #footer>
          <arrow-right-icon size="1.2x" class="footer-icon"></arrow-right-icon>
        </template>
      </cap-card>
      <slot></slot>
    </div>
    <button
      v-if="items.length > 3"
      :disabled="disableRight"
      @click="slideRight"
      type="button"
      class="navigation-btn right"
    >
      <chevron-right-icon size="1.5x" class="navigation-icon"></chevron-right-icon>
    </button>
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
    routeName: {
      type: String,
    }
  },
  data() {
    return {
      disableLeft: true,
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
      panels[this.currentSlide + this.slides].classList.add("transparent");
    },

    slideRight() {
      this.$refs.slider.scrollLeft += 400;
      const panels = document.querySelectorAll(".panel");
      panels[this.currentSlide].classList.add("transparent");
      panels[this.currentSlide + this.slides].classList.remove("transparent");
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
