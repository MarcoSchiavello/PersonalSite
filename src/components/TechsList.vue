<template>
    <ul class="techs-list">
        <TechsListItem v-for="tech in techs" :key="tech.name" :name="tech.name" :logo="tech.logo" :checked="tech.checked" />
    </ul>
</template>

<script>
import TechsListItem from '@/components/TechsListItem.vue';

const techs = require('@/data.json').techs;

export default {
    name: 'TechsList',
    components: {
        TechsListItem,    
    },
    data() {
        return {
            techs: techs,
        }
    }
}
</script>

<style lang="scss" scoped>
.techs-list {
    @include flex(center, null, column, 0.8rem);
    padding: 0;
}
</style>