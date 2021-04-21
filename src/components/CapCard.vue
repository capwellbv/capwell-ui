<template>
	<div class="cap-card" :class="`cap-card-${size}`" @click="handleAcitve">
		<div >
			<img :src="src" alt="images" v-if="src" />
			<div class="card-body">
				<slot name="body"></slot>
			</div>
		</div>
		<div class="footer">
			<arrow-right-icon @click="clickHandler" size="1.2x" class="icon"></arrow-right-icon>
		</div>
	</div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons';
export default {
	name: 'Card',
	data() {
		return {
			active: false
		}
	},
	props: {
		src: String,
		size: {
			type: String,
			default: 'medium'
		}
	},
	components: {
		ArrowRightIcon,
	},
	methods: {
		clickHandler(evt) {
			this.$emit('click', evt);
		},
		handleAcitve() {
			this.active = !this.active
		}
	}
};
</script>

<style scoped lang="scss">
@import '../css/card.scss';
</style>
