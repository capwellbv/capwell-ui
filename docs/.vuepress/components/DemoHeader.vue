<template>
  <div>
    <cap-header
      :title="title"
      :sub-title="para"
      background-image="https://beta.capwell.nl/img/bg_content-xl.a825db9b.jpg"
    >
    </cap-header>
  </div>
</template>

<script>
export default {
  name: 'DemoHeader',
  data() {
    return {
      title: "Vind je IT-specialist",
      para: "We werken rechtstreeks voor eindklanten. Bij ons dus geen tussenschakels en lange inhuurketens! Zo houden we het hele proces zelf in de hand. En waarborgen we de kwaliteit waarvoor we staan."
    }
  },
}
</script>