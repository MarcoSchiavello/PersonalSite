<template>
    <footer class="footer">
        <div class="footer__col-cont">

            <div class="footer__col-cont__col">
                <h1 class="footer__col-cont__col__title">ABOUT</h1>
                <p class="footer__col-cont__col__text footer__col-cont__col__text--ch">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in orum.
                </p>
            </div>

            <div class="footer__col-cont__col">
                <h1 class="footer__col-cont__col__title">CONTACTS</h1>
                <p class="footer__col-cont__col__text">Email: <a href="mailto:marco.schaivello4@gmail.com">marco.schaivello4@gmail.com</a> </p>
                <p class="footer__col-cont__col__text">GitHub: <a href="https://github.com/MarcoSchiavello">https://github.com/MarcoSchiavello</a> </p>
                <p class="footer__col-cont__col__text">LinkedIn:<a href="https://www.linkedin.com/in/marco-schiavello-a07253212">https://www.linkedin.com/in/marco-schiavello-a07253212/</a> </p>
            </div>

            <div class="footer__col-cont__col">
                <h1 class="footer__col-cont__col__title">QUICK LINKS</h1>
                <router-link to="/">Home</router-link>
                <router-link to="/contacts">Contacts</router-link>
                <router-link to="/projects">Projects</router-link>
            </div>
            
        </div>

        <hr class="footer__line">

        <p class="footer__copyright">
            Copyright © 2021 All Rights Reserved by Marco Schiavello.
        </p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
    @include dimension(100%, 17rem);
    @include flex(center, null, column, 0.5rem);
    font-family: var(--text);
    margin-top: 8rem;
    border-top: 1px solid var(--clr-border);

    &__col-cont {
        @include flex(center, space-between, row, 0.3rem);
        width: 87%;

        &__col {
            @include dimension(max-content, 80%);
            @include flex(flex-start, space-between, column, null);
            

            &__title {
                font-size: 1em;
                font-family: var(--title);
            }

            &__text {
                font-size: 0.8em;
                width: max-content;
                text-align: justify;

                &--ch {
                    width: 40ch;
                }
            }
            
        }
    }

    &__line { 
        width: 90%;
    }

    &__copyright {
        font-size: 0.8em;
    }
}
</style>