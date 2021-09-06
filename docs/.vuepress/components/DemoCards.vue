<template>
    <div>
        <cap-card size="small">
            <template #body>
                <cap-title type="heading" size="6">small Card</cap-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam quod repudiandae omnis exercitationem aspernatur odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</p>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px">
            <template #body>
                <cap-title type="heading" size="6">Medium Card</cap-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam quod repudiandae omnis exercitationem aspernatur odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</p>
            </template>
        </cap-card>
        
        <cap-card style="margin-top: 20px" :nopadding="true">
            <template #body>
                <cap-title type="heading" size="6">Medium Card</cap-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam quod repudiandae omnis exercitationem aspernatur odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</p>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" size="larg">
            <cap-title type="heading" size="6">Large Card</cap-title>
            <template #body>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium labore in dolore sapiente quisquam, accusantium numquam repudiandae, impedit voluptatum rem doloribus autem illo pariatur eveniet temporibus placeat a sequi nostrum.</p>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" :bordered="true">
            <template #body>
                <cap-title type="heading" size="6">Border Card</cap-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam quod repudiandae omnis exercitationem aspernatur odio reprehenderit velit ducimus cupiditate? Optio nemo dolores odit officiis distinctio velit soluta consequuntur blanditiis!</p>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" :bordered="true" :clickable="true">
            <template #body>
                <cap-title type="heading" size="6">Icon Card</cap-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam perspiciatis sequi aut doloribus ipsa nemo saepe nobis libero culpa.</p>
            </template>
            <template #footer>
                <arrow-right-icon size="1.2x" class="icon"></arrow-right-icon>
            </template>
        </cap-card>

        <cap-card style="margin-top: 20px" :bordered="true" :fluid="true">
            <template #body>
                <cap-title type="heading" size="6">Fluid Card</cap-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam perspiciatis sequi aut doloribus ipsa nemo saepe nobis libero culpa.</p>
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

<style scoped lang="scss">
.footer {
    .icon {
        cursor: pointer;
        font-size: 20px;
    }

    &:hover {
        .icon {
            color: #0094cd;
        }
    }
}
</style>