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
        {slug: "#", title: "ROTTERDAM", description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quaerat perferendis itaque aliquid, repellendus quas dignissimos dolorem tenetur, atque debitis, quis doloremque quisquam repellat expedita fugit facere. Culpa, deleniti perspiciatis!" },
        {
                    slug: "#",
          title: "HILVERSUM",
          description: "Lorem ipsum dolor ",
        },
        {slug: "#", title: "DUIVEN", description: "repellendus quas dignissimos dolorem tenetur, atque debitis, quis doloremque quisquam repellat expedita fugit facere. Culpa, deleniti perspiciatis!" },
        { slug: "#", title: "ROTTERDAM", description: "quis doloremque quisquam repellat expedita fugit facere. Culpa, deleniti perspiciatis!" },
        {
                    slug: "#",
          title: "DUIVeN",
          description: "Lorem ipsum dolor ",
        },
        {slug: "#", title: "HILVERSUM", description: "quis doloremque quisquam repellat expedita fugit facere.!" },
      ],
    };
  },
};
</script>
