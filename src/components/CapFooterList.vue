<template>
	<div class="cap-ui cap-footer-list">
		<cap-title type="heading" size="8" font="medium" class="list-title">
			{{ title }}
		</cap-title>
		<ul class="list">
			<slot></slot>
		</ul>
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
