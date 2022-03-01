<template>
  <div v-if="show" class="cookie-message">
    <cap-container>
      <div class="content">
        <slot name="content">
          <cap-text size="6" font="300">
            By clicking “Accept All Cookies”, you agree to the storing of cookies
            on your device to enhance site navigation, analyze site usage, and
            assist in our marketing efforts.
            <router-link to="/disclaimer" class="cap-ui cap-link inline"
              >Lees onze Privacy & Disclaimer.</router-link
            >
          </cap-text>
        </slot>
      </div>
      <div class="button-wrapper">
        <cap-button
          @click="$emit('accepted')"
          varient="primary"
          size="xl"
          font="bold"
        >
          <slot name="button">{{ buttonText }}</slot>
        </cap-button>
      </div>
    </cap-container>
  </div>
</template>
<script>
export default {
  name: "CapCookieConsentNotice",
  props: {
    show: { type: Boolean, default: false },
    buttonText: { type: String, default: "Ik ga akkoord" }
  }
};
</script>
