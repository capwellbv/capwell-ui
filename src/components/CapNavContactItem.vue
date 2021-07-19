<template>
	<li class="cap-nav-contact-item cap-ui">
		<a
      :href="href"
      v-bind="$attrs"
    >
      <cap-button varient="circle" size="lg" >
        <slot />
      </cap-button>
    </a>
	</li>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'CapNavContactItem',
  props: {
    href: {
      type: String,
      default: null
    }
  }
};
</script>
