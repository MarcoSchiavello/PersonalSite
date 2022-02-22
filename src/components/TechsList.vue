<template>
    <ul class="techs-list">
        <TechsListItem v-for="tech in techs" :key="tech.name" :name="tech.name" :logo="tech.logo" :level="tech.level" />
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    row-gap: 1rem;
    align-content: center;
    justify-items: center;
    padding: 0;
}
</style>