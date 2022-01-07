<template>
    <div class="cont-img" :style="cssProps">
        <img class="cont-img__img" :src="require('@/assets/' + img)" :alt="desc" :width="w" :height="h">
    </div>
</template>

<script>
export default {
    name: "BaseShadowImg",
    props: {
        img: String,
        desc: String,
        w: Number,
        h: Number,
    },
    computed: {
        cssProps() {
            return {
                '--width': this.w + 'px',
                '--height': this.h + 'px',
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.cont-img
{
    @include dimension(var(--width), var(--height));
    @include boxShadow;
    border-radius: 10px;
    animation: 3.5s infinite floating ease-out;
    overflow: hidden;

    &__img {
        @include dimension(100%, 100%);
        object-fit: cover;
        transform: scale(1.2);        
    }
}
@keyframes floating {
    0% {
        @include boxShadow;
        transform: translateY(0);
    }

    50% {
        transform: translateY(-0.4rem);
        
        @include boxShadow(5px, 6px, 11px);
    }

    100% {
        @include boxShadow;
        transform: translateY(0);
    }
}
</style>