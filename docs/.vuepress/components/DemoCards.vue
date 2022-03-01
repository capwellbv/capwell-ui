<template>
    <div>
        <cap-card size="small">
            <template #body>
                <cap-title tag="h3" class="small" font="500" size="6">small Card</cap-title>
                <cap-text size="7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</cap-text>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px">
            <template #body>
                <cap-title tag="h3" class="small" font="500" size="6">Medium Card</cap-title>
                <cap-text size="7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</cap-text>
            </template>
        </cap-card>
        
        <cap-card style="margin-top: 20px" :nopadding="true">
            <template #body>
                <cap-title tag="h3" class="small" font="500" size="6">Medium Card</cap-title>
                <cap-text size="7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</cap-text>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" size="larg">
            <cap-title tag="h3" class="small" font="500" size="6">Large Card</cap-title>
            <template #body>
                <cap-text size="7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labore in numquam repudiandae, impedit voluptatum rem doloribus autem illo pariatur eveniet temporibus placeat a sequi nostrum.</cap-text>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" :bordered="true">
            <template #body>
                <cap-title tag="h3" class="small" font="500" size="6">Border Card</cap-title>
                <cap-text size="7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</cap-text>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" :bordered="true" :clickable="true">
            <template #body>
                <cap-title tag="h3" class="small" font="500" size="6">Icon Card</cap-title>
                <cap-text size="7">consectetur adipisicing elit. Reiciendis aperiam perspiciatis sequi aut doloribus ipsa nemo saepe nobis libero culpa.</cap-text>
            </template>
            <template #footer>
                <arrow-right-icon size="1.2x" class="icon"></arrow-right-icon>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" :bordered="true" :fluid="true">
            <template #body>
                <cap-title tag="h3" class="small" font="500" size="6">Fluid Card</cap-title>
                <cap-text size="7">consectetur adipisicing elit. Reiciendis aperiam perspiciatis sequi aut doloribus ipsa nemo saepe nobis libero culpa.</cap-text>
            </template>
            <template #footer>
                <arrow-right-icon size="1.2x" class="icon"></arrow-right-icon>
            </template>
        </cap-card>
    </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons';

export default {
    name: 'DemoCards',
    components: {
        ArrowRightIcon
    }
}
</script>
