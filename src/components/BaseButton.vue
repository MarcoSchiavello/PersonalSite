<template>
    <button class="button" type="button" :style="cssProps">{{ text }}</button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        text: String,
        w: String,
    },
    computed: {
        cssProps() {
            return {
                '--width': this.w,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.button {
    @include dimension(var(--width),2.5rem);
    border: none;
    color: var(--secondary);
    background-color: var(--primary);
    padding: 0 1rem;
    box-sizing: border-box;
    font-size: 1.1em;
    font-family: var(--title);
    transition: 0.2s;
}

.button:hover {
    background-color: var(--primary-light);
}
</style>