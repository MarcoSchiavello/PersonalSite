<template>
    <li class="techs-list-item">
        <div class="techs-list-item__checkbox">
            <svg v-if="checked" width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12.5L6.28571 19L20 1" stroke="black" stroke-width="2"/>
            </svg>
        </div>
        <img :src="require('@/assets/techsLogos/' + logo)" alt="logo of the technologies" class="techs-list-item__logo">
        <p class="techs-list-item__name">{{ name }}</p>
    </li>
</template>

<script>
export default {
    name: 'TechsListItem',
    props: {
        name: String,
        logo: String,
        checked: Boolean,    
    }
}
</script>

<style lang="scss" scoped>
.techs-list-item {
    @include flex(center, null, row, 0.7rem);
    @include boxShadow;
    width: 93%;
    min-height: 3.9rem;
    padding: 0.5rem 0.8rem;
    border-radius: 0.4rem;
    box-sizing: border-box;

    &__checkbox {
        @include dimension(1.5rem, 1.5rem);
        @include alignCenter;
        border: solid 1px var(--secondary);
        border-radius: 0.3rem;
        color: var(--secondary);

        & path {
            stroke: var(--secondary);
        }
    }

    &__logo {
        display: block;
        width: 2.6rem;
    }

    &__name {
        font-size: 1.1rem;
        margin: 0;
    }
}
</style>