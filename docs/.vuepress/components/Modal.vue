<template>
    <div>
        <CapButton varient="secondary" size="xl" @click="show = true">Show modal</CapButton>
        <CapModal :show="show" @close="show = false">
            <h1>Demo modal...</h1>
        </CapModal>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            show: false
        }
    }
}
</script>