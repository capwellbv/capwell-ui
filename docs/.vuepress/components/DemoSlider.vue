<template>
  <div>
    <cap-slider :items="items"></cap-slider>
  </div>
</template>

<script>
export default {
  name: "DemoSlider",
  data() {
    return {
      items: [
        {slug: "#", title: "ROTTERDAM", description: "description....." },
        {
                    slug: "#",
          title: "HILVERSUM",
          description: "Lorem ipsum dolor ",
        },
        {slug: "#", title: "DUIVEN", description: "description....." },
        { slug: "#", title: "ROTTERDAM", description: "description....." },
        {
                    slug: "#",
          title: "DUIVeN",
          description: "Lorem ipsum dolor ",
        },
        {slug: "#", title: "HILVERSUM", description: "description....." },
      ],
    };
  },
};
</script>
