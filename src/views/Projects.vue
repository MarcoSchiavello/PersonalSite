<template>
    <main>
        <div class="projects">
            <h1 class="projects__title">Projects</h1>
            <hr class="projects__line">
            <ProjectsList />
        </div>
    </main>
</template>

<script>
import ProjectsList from '@/components/ProjectsList.vue';
export default {
    name: "Projects",
    components: {
        ProjectsList,
    }
}
</script>

<style lang="scss" scoped>
.projects {
    @include flex(center, null, column);
    width: 100%;

    &__title {
        margin-bottom: 0.3rem;
    }

    &__line {
        width: 3.5rem;
    }
}
</style>