<template>
    <div id="cover" class="cover">
        <img :src="require('@/assets/' + img)" alt="coverImg" class="cover__img">

        <div class="cover__img-filter"></div>

        <div class="cover__text-box">  
            <svg width="102" height="88" viewBox="0 0 102 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="cover__text-box__line" d="M99.777 0H88.223L1.56757 87.9392H4.77703H13.1216L99.777 0Z" fill="#00A3FF" stroke="black" stroke-width="1.28378"/>
            </svg>
            <svg width="438" height="88" viewBox="0 0 438 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="cover__text-box__box cover__text-box__line" d="M435.743 1.28378H106.453H87.1959L1.82433 87.2973H350.372L435.743 1.28378Z" fill="white" stroke="black" stroke-width="1.28378"/>
                <text class="cover__text-box__text" fill="#000000" x="50%" y="35%" dominant-baseline="middle" text-anchor="middle" font-size="1.3em" >{{ text }}</text> 
                <line class="cover__text-box__line" x1="42%" y1="56%" x2="58%" y2="56%" stroke="black" stroke-width="1.28378"/>
                <text class="cover__text-box__text" fill="#000000" x="50%" y="73%" dominant-baseline="middle" text-anchor="middle" font-size="0.85em">{{ subText }}</text> 
            </svg>
            <svg width="102" height="88" viewBox="0 0 102 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="cover__text-box__line" d="M99.777 0H88.223L1.56757 87.9392H4.77703H13.1216L99.777 0Z" fill="#00A3FF" stroke="black" stroke-width="1.28378"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cover',
    props: {
        text: String,
        subText: String,
        img: String,
    }
}
</script>

<style lang="scss" scoped>
.cover {
    @include dimension(100%, 25rem);
    @include alignCenter;
    position: relative;
    overflow: hidden;

    &__img {
        @include dimension(100%, 100%);
        @include position(absolute, 0, null, null, 0);
        object-fit: cover;
        z-index: 100;
    }

    &__img-filter {
        @include dimension(100%, 100%);
        @include position(absolute, 0, null, null, 0);
        background-color: var(--clr-filter);
        z-index: 101;
    }

    &__text-box {
        display: flex;
        width: 25rem;
        z-index: 102;

        & :first-child {
            margin-right: -4.4rem;
        }

        & :last-child {
            margin-left: -4.4rem;
        }

        &__box {
            fill: var(--clr-background);
        }

        &__text{
            fill: var(--secondary);
        }

        &__line {
            stroke: var(--secondary);
        }
    }

}
</style>