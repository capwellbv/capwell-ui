<template>
	<div :class="['cap-card', `cap-card-${size}`, {'bordered': bordered}]">
		<div class="image" v-if="$slots.image">
			<slot name="image"></slot>
		</div>
		<div class="card-body">
			<slot name="body"></slot>
		</div>
		<div class="footer" v-if="$slots.footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		size: {
			type: String,
			default: 'medium'
		},
		bordered: {type: Boolean, default: false}
	}
};
</script>

<style scoped lang="scss">
@import '../css/card.scss';
</style>
