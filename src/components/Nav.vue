<template>
  <nav class="nav">
    <div class="nav__logo">
      <h1 class="nav__logo__text">Marco Schiavello</h1>
      <hr class="nav__logo__line" />
      <h5 class="nav__logo__subtext">personal site</h5>
    </div>

    <ul class="nav__links">
      <li class="nav__links__item"><router-link to="/">Home</router-link></li>
      <li class="nav__links__item"><router-link to="/contacts">Contacts</router-link></li>
      <li class="nav__links__item"><router-link to="/projects">Projects</router-link></li>
    </ul>

    <div class="nav__hamburger">
      <button class="nav__hamburger__btn" @click="switchHamburger">
        <svg class="nav__hamburger__btn__svg" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                -1230 1193 -72 26 -136 26 -207 -1z"/>
            </g>
        </svg>
      </button>
      <ul class="nav__hamburger__content">
        <li class="nav__hamburger__content__item"><router-link to="/">Home</router-link></li>
        <li class="nav__hamburger__content__item"><router-link to="/contacts">Contacts</router-link></li>
        <li class="nav__hamburger__content__item"><router-link to="/projects">Projects</router-link></li>
      </ul>
    </div>

  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "Nav",
  methods: {
    switchHamburger() {
      document.querySelector('.nav__hamburger__content').classList.toggle('nav__hamburger__content--on');
      document.querySelector('.nav__hamburger__btn__svg').classList.toggle('nav__hamburger__btn__svg--rotare');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav {
  @include dimension(100%, 80px);
  @include flex(center, space-between);
  background-color: var(--clr-background);
  padding-left: 1rem;
  border-bottom: 1px var(--clr-border) solid;
  box-sizing: border-box;

  &__logo {
    display: flex;
    position: relative;
    gap: 0.6em;

    &__text {
      font-size: 1.2em;
    }
    &__line {
      height: 2em;
      transform: rotate(40deg) translateY(12px);
    }

    &__subtext {
      color: var(--secondary);
      @include position(relative, null, null, -0.5em, -0.7em);
    }
  }

  &__links {
    @include dimension(max-content, 100%);
    display: flex;
    padding: 0;
    margin: 0;

    &__item {
      @include dimension(7rem, 100%);
      @include alignCenter;
      position: relative;
      list-style: none;
      border-left: 1px var(--clr-border) solid;
      overflow: hidden;
      cursor: pointer;
      
      & > *
      {
        @include dimension(100%, 100%);
        @include alignCenter;
        z-index: 100;
      }

      &::before {
        content: "";
        @include dimension(120%, 200%);
        position: absolute;
        background-color: var(--primary);
        transform: rotate(40deg) translateY(100%);
        transition: 0.6s ease;
        z-index: 99;
      }

      &:hover::before {
        transform: scale(1.3) rotate(45deg) translateY(0);
      }
    }
  }

  &__hamburger {
    display: none;
    width: 100%;
    z-index: 1000;

    &__btn {
      @include dimension(100%, 1.7rem);
      @include alignCenter;
      border: none;
      outline: none;
      background-color: var(--primary);
      color: var(--secondary);

      &__svg {
        width: 1rem;
        transform: rotate(90deg);
        transition: 0.5s ease;

        &--rotare {
          transform: rotate(-90deg);
        }
        
        & > g {
          fill: var(--secondary);
        }
      }
    }

    &__content {
      @include dimension(100%, 0);
      @include flex(null, null, column);
      padding: 0;
      margin: 0; 
      overflow: hidden;
      box-sizing: border-box;
      background-color: var(--clr-background);
      transition: 0.5s ease;
      
      &--on {
        height: calc(3.5rem * 3);
        border-bottom: solid 1px var(--clr-border);
      }

      &__item {
        @include dimension(100%, 3.5rem);
        position: relative;
        list-style: none;

        &:not(:last-child) {
          border-bottom: solid 1px var(--clr-border);
        }

        & > * {
          @include dimension(100%, 100%);
          @include alignCenter;
        }
      }

      
    }
  }

  @include mq('small') {
    & {
      flex-direction: column;
      align-items: center;
      padding: 0;
    }

    &__links {
      display: none;
    }
    
    &__hamburger {
      display: block;
    }

    &__content {
      padding: 1rem 0;
    }

  }
}
</style>
