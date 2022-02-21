<template>
  <main>
    <div class="contacts">

      <h1>Contacts</h1>

      <div class="contacts__section">

        <div class="contacts__section__cont">
          <BaseShadowImg img="mole.jpg" desc="Immagine Mole Antonelliana" h=300 w=200 />
        </div>
        
        <hr class="contacts__section__line">

        <div class="contacts__section__cont contacts__section__cont--align-start">
          <ContactsLink email="marco.schaivello4@gmail.com" />
          <ContactsLink github="https://github.com/MarcoSchiavello" username="MarcoSchiavello" />
          <ContactsLink linkedin="https://www.linkedin.com/in/marco-schiavello-a07253212/" username="Marco Schiavello" />
        </div>

      </div>

    </div>

    <form class="contact-me">

      <h1>Contact me</h1>
      
      <div class="contact-me__cont">
        <BaseInputText label="Title" w="100%" v-model="mailTitle" />
        <BaseTextArea label="Message" w="100%" h="10rem"  v-model="mailMsg" />
        <BaseButton text="Send" w="7rem" @click="writeMsg" />
      </div>
      
      <h5 class="contact-me__alert">{{ alertPhrase }}</h5>
    </form>

  </main>
</template>

<script>
import BaseShadowImg from '@/components/BaseShadowImg.vue';
import BaseInputText from '@/components/BaseInputText.vue';
import BaseTextArea from '@/components/BaseTextArea.vue';  
import BaseButton from '@/components/BaseButton.vue';  
import ContactsLink from '@/components/ContactsLink.vue';

import emailjs from 'emailjs-com';

export default {
  name: 'Contacts',
  components: {
    BaseShadowImg,
    BaseInputText,
    BaseTextArea,
    BaseButton,
    ContactsLink,
  },
  data() {
    return {
      mailTitle: '',
      mailMsg: '',
      alertPhrase: ''
    };
  },
  methods: {
    writeMsg() {
      if(this.mailTitle.trim() === '' || this.mailTitle.trim() === '') {
        document.querySelector('.contact-me__alert').classList.add('contact-me__alert--failure');
        this.alertPhrase = 'Title or body of the message is invalid';
        return;
      }

      try {
        emailjs.send('service_4oyvrw9', 'template_68f4r2s', {
          mailTitle: this.mailTitle,
          mailMsg:  this.mailMsg,
        }, 'user_41Rv7ILWXHM3beAxcwCbV');

        document.querySelector('.contact-me__alert').classList.add('contact-me__alert--success');
        this.alertPhrase = 'Message sent successfuly';

      } catch(error) {
          document.querySelector('.contact-me__alert').classList.add('contact-me__alert--failure');
          this.alertPhrase = 'Error while delivering the message';
          console.log({error});
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  @include flex(center, null, column);

  &__section {
    @include dimension(100%,25rem);
    @include flex(center, center, row, 0.8rem);
    max-width: var(--max-width);

    &__cont {
      @include dimension(max-content,100%);
      @include flex(center, center, column,3rem);

      &--align-start {
        @include flex(flex-start, center, column,3rem);

      }

      &__link {
        @include flex(center, null, row, 0.6rem);
        margin: 0;

        &__icon {
          width: 2.3rem;
          fill: var(--primary);
        }

        &__anchor:hover {
          text-decoration: underline;
        }
      }
    }

    &__line {
      @include dimension(0.3rem,13rem);
      background-color: var(--clr-border);
      border-radius: 0.3rem;
      border: none;
      margin: 0 6rem;
    }

    @include mq('smallMedium') {
      & {
        height: max-content;
        flex-direction: column;
        margin: 2rem 0;
      }

      &__line {
        @include dimension(5rem, 0.4rem);
        margin: 1.3rem 0;
      }
    }
  }
}

.contact-me {
  width: 90%;
  margin: 0 auto;
  max-width: var(--max-width);
  
  &__alert {
    @include dimension(max-content, 0);
    margin: 2rem auto;

    &--success {
      color: var(--clr-success);
    }
    
    &--failure {
      color: var(--clr-failure);
    }
  }

  &__cont {
    @include flex(center, space-between, column, 1rem);
    width: 85%;
    margin: 0 auto;
  }
}

</style>