<template>
  <div>
    <cap-slider :items="items">
      <cap-card
        :bordered="true"
        :nopadding="true"
        size=""
        class="panel"
        style="padding: 1rem"
        v-for="(item, index) in items"
        :key="index"
      >
        <template #body>
          <cap-title
            style="color: #0076a4"
            type="subheading"
            size="3"
            transform="uppercase"
            font="bold"
            >{{ item.title }}</cap-title
          >
          <cap-title type="heading" size="6" font="medium">{{
            item.description
          }}</cap-title>
        </template>
      </cap-card>
    </cap-slider>
  </div>
</template>

<script>
export default {
  name: "DemoSlider",
  data() {
    return {
      items: [
        { slug: "#", title: "ROTTERDAM", description: "description....." },
        {
          slug: "#",
          title: "HILVERSUM",
          description: "Lorem ipsum dolor ",
        },
        { slug: "#", title: "DUIVEN", description: "description....." },
        { slug: "#", title: "ROTTERDAM", description: "description....." },
        {
          slug: "#",
          title: "DUIVeN",
          description: "Lorem ipsum dolor ",
        },
        { slug: "#", title: "HILVERSUM", description: "description....." },
      ],
    };
  },
};
</script>
