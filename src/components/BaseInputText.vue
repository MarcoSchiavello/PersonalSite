<template>
    <div class="input-text" :style="cssProps">
        <input class="input-text__input" type="text" :name="label" required>
        <label class="input-text__label" :for="label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "BaseInputText",
    props: {
        label: String,
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
.input-text {
    @include dimension(var(--width),1.4rem);
    @include flex(center, flex-start);
    position: relative;
    border: 2px solid var(--secondary);
    border-radius: 0.5rem;
    background-color: var(--clr-background);
    padding: 0.5rem;
    

    &__input {
        @include dimension(100%,100%);
        @include position(absolute, 0, null, null, 0);
        background-color: transparent;
        border: none;
        padding: 0.5rem;
        box-sizing: border-box;
        outline: none;
        font-family: var(--title);
    }

    &__label {
        @include position(relative, 0, null, null, 0);
        background-color: var(--clr-background);
        transition: 0.2s ease;
        pointer-events: none;
        color: var(--secondary);
    }

    &__input:valid + &__label, &__input:focus + &__label {
        @include position(relative, -1.2rem, null, null, 0);
        font-size: 0.85em;
    }
}
</style>