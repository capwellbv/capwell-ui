<template>
	<div>
		<cap-link size="small" src="#">
			Small link
		</cap-link>
		<cap-link size="medium" src="#">
			Medium link
		</cap-link>
		<cap-link size="large" src="#">
			Large link
		</cap-link>
		
		<cap-link size="large" src="#">
			Link with icon
			<template #icon>
				<arrow-right-icon size="1.2x" class="link-icon"></arrow-right-icon>
			</template>
		</cap-link>
	</div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons';
export default {
	name: 'Links',
	components: {
		ArrowRightIcon,
	},
};
</script>
