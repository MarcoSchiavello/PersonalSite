<template>
    <div class="theme-btn">

        <button class="theme-btn__btn" @click="changeTheme">
            <svg class="theme-btn__btn__moon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                <path d="m275.4,500.7c-135,0-244.7-109.8-244.7-244.7 1.06581e-14-134.9 109.8-244.7 244.7-244.7 8.2,0 16.4,0.4 24.6,1.2 7.2,0.7 13.5,5.2 16.5,11.7s2.4,14.2-1.6,20.2c-23,33.8-35.2,73.3-35.2,114.2 0,105 78.7,192.2 183.2,202.6 7.2,0.7 13.5,5.2 16.5,11.7 3.1,6.5 2.4,14.2-1.6,20.2-45.8,67.4-121.4,107.6-202.4,107.6zm-12.5-448c-106.5,6.5-191.2,95.2-191.2,203.3 1.42109e-14,112.3 91.4,203.7 203.7,203.7 56.4,0 109.6-23.4 147.8-63.7-46.2-11.7-88.1-36.8-120.8-72.6-41.1-45.2-63.8-103.6-63.8-164.6 0.1-37.1 8.4-73.2 24.3-106.1z"/>
            </svg>
        </button>
    
        <svg class="theme-btn__arrow" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                -1230 1193 -72 26 -136 26 -207 -1z"/>
            </g>
        </svg>

    </div>
</template>

<script>
export default {
    name: "ThemeButton",
    methods: {
        changeTheme() {
            document.querySelector('#app').classList.toggle('dark-theme');
            document.querySelector('#app').classList.toggle('white-theme');
        }
    }
}
</script>

<style lang="scss" scoped>
.theme-btn {
    @include dimension(4rem, 2rem);
    @include flex(center, null, row, 0.4rem);
    @include position(fixed, 50%, null, null, -3rem);
    transform: translateY(-50%);
    background-color: var(--clr-background);
    padding: 0.4rem;
    border: 1px solid var(--secondary);
    border-left: none;
    transition: 0.4s ease;
    z-index: 10000;

    &__btn {
        @include position(absolute, 50%, null, null, 0.4rem);
        transform: translateY(-50%);
        border: none;
        padding: 0.2rem;
        border-radius: 100%;
        background-color: var(--secondary);
        outline: none;
        
        &__moon {
            @include dimension(1.5rem);
            
            & > path {
                fill: var(--clr-background);
            }
        }
    }

    &__arrow {
        @include dimension(1.5rem);
        @include position(absolute, 50%, 0.2rem, null, null);
        transform: translateY(-50%);

        & > g {
            fill: var(--secondary);
        }
    }

    &:hover {
        left: 0;
    }
}
</style>