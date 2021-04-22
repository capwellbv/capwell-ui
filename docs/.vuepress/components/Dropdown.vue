<template>
  <div>
    <cap-dropdown text="dropdown" :show="showMenu" @toggle="(value) => showMenu = value">
      <cap-dropdown-item
        v-for="(item, index) in items"
        :key="index"
        :value="item.text"
      >
      </cap-dropdown-item>
    </cap-dropdown>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      showMenu: false,
      items: [
        { text: "item one" },
        { text: "item two" },
        { text: "item three" },
      ],
    };
  },
};
</script>
