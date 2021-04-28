<template>
  <div>
    <cap-slider :items="items"></cap-slider>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      items: [
        { slug: "#", title: "Title", description: "description....." },
        {
          slug: "#",
          title: "Title",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        { slug: "#", title: "Title", description: "description....." },
        { slug: "#", title: "Title", description: "description....." },
        {
          slug: "#",
          title: "Title",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        { slug: "#", title: "Title", description: "description....." },
      ],
    };
  },
};
</script>
