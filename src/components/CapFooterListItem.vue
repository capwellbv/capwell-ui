<template>
	<li class="cap-ui cap-footer-list-item">
		<slot>
			<chevron-right-icon size="18" class="icon"></chevron-right-icon>
			<router-link v-if="$attrs.to" :to="$attrs.to" class="link">{{ text }}</router-link>
			<a v-else class="link" v-bind="$attrs">{{ text }}</a>
		</slot>
	</li>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons';

export default {
	inheritAttrs: false,
	name: 'CapFooterListItem',
	props: {
		text: {
			type: String,
			default: 'link'
		}
	},
	components: {
		ChevronRightIcon
	}
};
</script>
