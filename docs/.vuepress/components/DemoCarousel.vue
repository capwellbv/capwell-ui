<template>
  <section class="carousel">
    <cap-carousel id="carousel-example" :duration="3000" :items="testimonials"></cap-carousel>
  </section>
</template>

<script>
import CapCarousel from '../../../src/components/CapCarousel.vue';

export default {
  name: 'DemoCarousel',
  components: {
    CapCarousel
  },
  data() {
    return {
      testimonials: [
        {
          info: "Projectmanager, KLM",
          text:
            "Positief, snel en adequaat geholpen met mijn vraag holpen met m holpen met m holpen met m. Er werd goed meegedacht en de opdracht kon heel snel worden uitgevoerd.",
          logo: "https://www.experts4office.nl/img/client_klm.486d02f7.png"
        },
        {
          info: "Systeembeheerder Automatisering, KNSB",
          text:
            "De samenwerking met E4O was een goede ervaring. Als wij weer extra expertise nodig hebben, weten we E4O te vinden.",
          logo: "https://www.experts4office.nl/img/client_knsb.5701e61b.png"
        },
        {
          info: "Manager Business Systems, Koninklijke Jongeneel",
          text:
            "Bij het plaatsen van een aanvraag wordt goed meegedacht. E4O doet echt haar best om de juiste specialist te leveren.",
          logo: "https://www.experts4office.nl/img/client_jongeneel.aa071e46.png"
        },
        {
          info: "Secretaris Ondernemingsraad, Gemeente Utrecht",
          text:
            "Het kon niet sneller, binnen een half uur werd ik al gebeld om een afspraak te maken met de Office specialist.",
          logo: "https://www.experts4office.nl/img/client_gemeente-utrecht.f3a1a9a1.png"
        }
      ],
    }
  }
};
</script>
<style scoped>
section.carousel {
  background: linear-gradient(162.14deg, #c61e27, #811b75 99.93%);
  position: relative;
  overflow-x: hidden;
  padding: 120px 90px;
}
</style>