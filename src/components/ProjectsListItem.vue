<template>
    <li class="project-list-item">
        
        <h2 class="project-list-item__title">{{ title }}</h2>

        <p class="project-list-item__desc">{{ desc }}</p>

        <div class="project-list-item__links">
            
            <a v-if="github !== 'false'" :href="github" class="project-list-item__links__link">
                <svg class="project-list-item__links__link__icon"  viewBox="0 0 43 42" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2 1.78618e-06C9.48693 -0.00476819 0 9.54472 0 21.3313C0 30.6519 5.93466 38.5748 14.1996 41.4845C15.3127 41.7659 15.1421 40.9693 15.1421 40.4255V36.7288C8.71491 37.4872 8.4544 33.2038 8.0234 32.4883C7.15191 30.9905 5.09159 30.6089 5.70732 29.8934C7.17085 29.135 8.6628 30.0842 10.3916 32.6552C11.642 34.5203 14.0812 34.2055 15.3174 33.8954C15.5874 32.7745 16.1652 31.7728 16.9609 30.9953C10.3016 29.7933 7.52608 25.7006 7.52608 20.8352C7.52608 18.4741 8.29811 16.3038 9.81374 14.5532C8.84752 11.6674 9.90373 9.19651 10.0458 8.82922C12.7976 8.58118 15.6584 10.8135 15.881 10.99C17.444 10.5655 19.2296 10.3413 21.2284 10.3413C23.2366 10.3413 25.0269 10.575 26.6041 11.0043C27.1394 10.5941 29.7917 8.67658 32.3493 8.91031C32.4867 9.2776 33.5192 11.6912 32.6098 14.5389C34.1444 16.2942 34.9259 18.4837 34.9259 20.8496C34.9259 25.7245 32.1315 29.8219 25.4532 31.0048C26.0252 31.5714 26.4794 32.247 26.7892 32.9923C27.0991 33.7376 27.2584 34.5375 27.2578 35.3455V40.7117C27.2957 41.141 27.2578 41.5656 27.9682 41.5656C36.3563 38.7179 42.3952 30.7377 42.3952 21.3361C42.3952 9.54472 32.9035 1.78618e-06 21.2 1.78618e-06Z"/>
                </svg>

            </a>

        </div>

    </li>
</template>

<script>

export default {
    name: "ProjectsListItem",
    props: {
        title: String,
        desc: String,
        github: {
            type: String,
            default: 'false',
        }
    }
}
</script>

<style lang="scss" scoped>
.project-list-item {
    @include flex(center, null, row, 0.7rem);
    @include boxShadow;
    position: relative;
    width: 100%;
    padding: 0.8rem 0.8rem;
    border-radius: 0.4rem;
    box-sizing: border-box;

    &__title, &__desc {
        margin: 0;
    }

    &__title {
        margin-right: 1rem;
    }

    &__links {
        @include flex(center, null, row, 0.7rem);
        @include position(absolute, 50%, 1.2rem, null, null);
        transform: translateY(-50%);

        &__link {
            @include dimension(2rem,2rem);

            &__icon {
                @include dimension(100%,100%);

                & > path {
                    fill: var(--primary);
                }
            }
        }
    }

    @include mq('medium') {
        & {
            flex-direction: column;
        }

        &__links {
            top: 1.7rem;
        }
    }
}
</style>