<template>
	<div>
        <p>Large input</p>

		<cap-input  style="margin-top: 20px" placeholder="Search value" size="large" >
			<template #icon>
				<search-icon size="1.2x" class="icon"></search-icon>
			</template>
		</cap-input>
		<cap-input style="margin-top: 20px" placeholder="Search value" :rounded='true' size="large" >
			<template #icon>
				<search-icon size="1.2x" class="icon"></search-icon>
			</template>
		</cap-input>
        <cap-input style="margin-top: 20px" placeholder="Username" :disabled='true' :rounded='true' size="large">
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>

        <p>Medium input</p>
		
		<cap-input style="margin-top: 20px" placeholder="Username">
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>

		<cap-input style="margin-top: 20px" placeholder="Username" :rounded='true'>
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>

		<cap-input style="margin-top: 20px" placeholder="Username" :disabled='true' :rounded='true'>
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>

         <p>Small input</p>
         <cap-input style="margin-top: 20px" placeholder="Username"  size="small">
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>

		<cap-input style="margin-top: 20px" placeholder="Username" :rounded='true' size="small">
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>

		<cap-input style="margin-top: 20px" placeholder="Username" :disabled='true' :rounded='true' size="small">
			<template #icon>
				<user-icon size="1.2x" class="icon"></user-icon>
			</template>
		</cap-input>
	</div>
</template>

<script>
import { SearchIcon, UserIcon } from 'vue-feather-icons';
export default {
    name: 'Input',
    data() {
        return {
            inputValue: '',
            searchValue:''
        }
    },
	components: {
		SearchIcon,
        UserIcon
	},
};
</script>

<style scoped lang="scss">
@import '../../../src/css/input.scss';
</style>
