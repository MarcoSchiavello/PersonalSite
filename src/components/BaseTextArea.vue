<template>
    <div class="input-text" :style="cssProps">
        <textarea class="input-text__input" :name="label" v-model="message" required />
        <label class="input-text__label" :for="label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: "BaseTextArea",
    props: {
        label: String,
        w: String,
        h: String,
    },
    computed: {
        cssProps() {
            return {
                '--width': this.w,
                '--height': this.h,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.input-text {
    @include dimension(var(--width),var(--height));
    @include flex(flex-start, flex-start);
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
        resize: none;
        font-family: var(--text);
    }

    &__label {
        @include position(relative, 0, null, null, 0);
        background-color: var(--clr-background);
        transition: 0.2s ease;
        color: var(--secondary);
    }

    &__input:valid + &__label, &__input:focus + &__label {
        @include position(relative, -1.2rem, null, null, 0);
        font-size: 0.85em;
    }
}
</style>