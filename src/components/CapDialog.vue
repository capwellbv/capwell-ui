<template>
	<div class="cap-ui cap-dialog">
    <cap-button @click="showDialog = true" varient="secondary" size="lg">{{buttonText}}</cap-button>
		<transition name="fade" appear>
			<div
				class="dialog-overlay"
				v-if="showDialog"
				@click="showDialog = false"
			></div>
		</transition>
		<transition name="pop" appear>
			<div class="dialog" v-if="showDialog" :class="role">
        <slot></slot>
        <cap-button @click="showDialog= false" varient="secondary" size="md">Yes</cap-button>
        <cap-button @click="showDialog= false" varient="secondary" size="md">No</cap-button>
			</div>
		</transition>
	</div>
</template>

<script>
import CapButton from "./CapButton.vue"
export default {
	name: 'CapDialog',
	data() {
		return {
			showDialog: false,
		};
	},
  components: {
    CapButton
  },
  props: {
    buttonText: {
      type: String,
      default: 'Model Open'
    },
    role: {
      type: String,
      default: 'info'
    }
  }
};
</script>