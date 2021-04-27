<template>
	<div class="cap-seprator"></div>
</template>

<script>
export default {
	name: 'CapSeprator',
};
</script>

<style lang="scss" scoped>
@import '../css/_variables';
.cap-seprator {
	margin: 0 1rem $p-3 1rem;
	border: 3px solid $light-grey;
	width: 100%;
	border-radius: 5px;
}
</style>
