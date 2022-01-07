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
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "Nav",
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
}
</style>
