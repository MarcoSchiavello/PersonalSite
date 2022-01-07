<template>
    <ul class="project-list">
        <ProjectsListItem v-for="project in projects" :key="project.name" :title="project.name" :desc="project.desc" :github="project.github" />
    </ul>
</template>

<script>
import ProjectsListItem from '@/components/ProjectsListItem.vue';

const projects = require('@/data.json').projects;

export default {
    name: "ProjectsList",
    components: {
        ProjectsListItem,
    },
    data() {    
        return {
            projects: projects,
        };
    },
}
</script>

<style lang="scss" scoped>
.project-list {
    @include flex(center, null, column, 0.8rem);
    width: 80%;
    margin: 0;
    padding: 0;
    max-width: var(--max-width);
    margin: 2rem 0;
}
</style>