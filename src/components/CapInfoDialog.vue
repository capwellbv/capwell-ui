<template>
    <cap-dialog :show="show" @close="$emit('close')">
        <cap-text size="6" font="300">
            {{ message }}
        </cap-text>
    </cap-dialog>
</template>

<script>
import CapDialog from './CapDialog'

export default {
    name: 'cap-info-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: ''
        }
    },
    components: { CapDialog },
}
</script>

<style>

</style>