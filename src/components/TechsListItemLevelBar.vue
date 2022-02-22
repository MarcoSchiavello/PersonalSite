<template>
    <div class="level-bar">
        <div class="level-bar__bar">
            <span class="level-bar__bar__chunk" v-if="this.level > 0"></span>
            <span class="level-bar__bar__chunk" v-if="this.level > 1"></span>
            <span class="level-bar__bar__chunk" v-if="this.level > 2"></span>
        </div>
        <h5 class="level-bar__desc">{{ levelDesc }}</h5>
    </div>
    
</template>

<script>
export default {
    name: 'TechsListItemLevelBar',
    props: {
        level: Number
    },
    data() {
        let levelDesc = '';

        console.log(this.level);

        switch(this.level) {
            case 0:
                levelDesc = 'Zero knowledge';
            break;

            case 1:
                levelDesc = 'Base knowledge';
            break;

            case 2:
                levelDesc = 'Intermediate knowledge';
            break;

            case 3:
                levelDesc = 'High knowledge';
            break;
        }

        return {
            levelDesc: levelDesc
        };
    }
}
</script>

<style lang="scss" scoped>
.level-bar {
    @include dimension(max-content, max-content);
    @include flex(center, center, column);

    &__bar {
        @include dimension(10rem, 0.6rem);
        @include flex(center, null, row);
        position: relative;
        border: solid 0.05rem var(--clr-border);
        border-radius: 2rem;
        overflow: hidden;

        &__chunk {
            @include dimension(calc(100%/3), 150%);
            display: block;
            background-color: var(--primary);
        }

        &::after {
            @include dimension(0.15rem, 100%);
            @include position(absolute, 0, calc(100%/3));
            content: '';
            display: block;
            background-color: var(--clr-border);
        }
        
        &::before {
            @include dimension(0.15rem, 100%);
            @include position(absolute, 0, null, null, calc(100%/3));
            content: '';
            display: block;
            background-color: var(--clr-border);
        }
    }

    &__desc {
        margin: 0.5rem 0;
        color: var(--secondary);
        font-family: var(--text);
    }
}
</style>