<template>
  <li>
      <span>{{ value }}</span>
  </li>
</template>

<script>
export default {
    name: 'CapDropdownItem',
    props: {value: { default: ''}}
}
</script>