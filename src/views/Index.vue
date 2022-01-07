<template>
  <main>
    <Cover  text="Marco Schiavello" subText="Personal Site" img="coverImg.jpg" />
    
    <section class="section">
        <div class="section__cont">
            <BaseShadowImg img="coverImg.jpg" desc="My foto" h=300 w=200 />
        </div>
        <div class="section__cont section__cont--text">
            <h1 class="section__cont__title">About Me</h1>
            <hr class="section__cont__line">
            <p class="section__cont__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in orum.
            </p>
        </div>
    </section>

    <div class="techs">
      <h1 class="techs__title">Technologies & Programming languages</h1>
      <p class="techs__desc">Here there are technologies that i have learned or i want to learn </p>
      <TechsList />
    </div>

  </main>
</template>

<script>
import Cover from '@/components/Cover.vue';
import BaseShadowImg from '@/components/BaseShadowImg.vue';
import TechsList from '@/components/TechsList.vue';

export default {
  name: 'Index',
  components: {
    Cover,
    BaseShadowImg,
    TechsList,
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  display: flex;
  margin: 5rem auto;
  padding: 50px;
  max-width: var(--max-width);
  box-sizing: border-box;

  &__cont {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &--text {
      align-items: flex-start;
      flex-direction: column;
    }

     &__title {
      color: var(--primary);
    }

    &__line {
      width: 4.3rem;
      margin: 0;
    }

    &__text {
      text-align: justify;
      width: 80%;
    }
  }
}

.techs {
  width: 90%;
  margin: 0 auto;
  max-width: var(--max-width);
  
  &__title {
    color: var(--primary);
    margin: 0;
  }

  &__desc {
    padding-left: 0.3rem;
    margin-top: 0.3rem;
    margin-bottom: 1.4rem;
  }
}
</style>