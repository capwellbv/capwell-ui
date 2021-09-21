<template>
  <cap-cookie-consent-notice :show="show" @accepted="accpetCookieConsent"></cap-cookie-consent-notice>
</template>

<script>
export default {
  name: "DemoCookieConsent",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    accpetCookieConsent() {
      // add cookie
      this.show = false
    }
  }
}
</script>