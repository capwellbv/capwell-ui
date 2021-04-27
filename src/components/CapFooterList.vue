<template>
	<div class="cap-footer-list">
		<span class="cap-title">{{ title }}</span>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'CapFooterList',
	props: {
		title: {
			type: String,
			default: 'List Title',
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../css/footerlist.scss';
</style>
