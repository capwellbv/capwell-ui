<template>
	<div class="cap-nav-item">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'CapNavItem',
};
</script>

<style lang="scss" scoped>
@import '../css/header.scss';

.cap-nav-item {
	a {
		color: $black;
		&:hover {
			text-decoration: none;
		}
	}
}
</style>
