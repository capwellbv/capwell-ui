<template>
    <div>
        <DefaultButton varient="secondary" size="xl" @click="show = true">Show modal</DefaultButton>
        <CapModal :show="show" @close="show = false">
            <h1>Demo modal...</h1>
        </CapModal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>