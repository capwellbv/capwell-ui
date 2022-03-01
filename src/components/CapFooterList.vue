<template>
	<div class="cap-ui cap-footer-list">
		<cap-title tag="h5" font="500" class="mb-0 list-title">
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
