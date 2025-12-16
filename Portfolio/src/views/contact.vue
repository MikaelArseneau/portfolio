<template>
  <section class="annexe">
    <div class="ContenuDisplay">
      <a class="GitHub" href="#home">Accueil</a>
      <a class="GitHub" @click.prevent="openContact">Contact</a>
      <a class="GitHub" href="#projets">Projets</a>
      <a class="GitHub" href="#Competence">Compétences</a>
    </div>
    <div class="ContenuDisplay">
      <a class="GitHub" href="https://github.com/MikaelArseneau" target="_blank"
        >Github</a
      >
      <a
        class="GitHub"
        href="https://www.linkedin.com/in/mikael-arseneau/

"
        target="_blank"
        >linkedin</a
      >
    </div>
  </section>

  <footer>
    <div class="nom">Mikael Arseneau</div>
    <div class="nom">Développeur Front-End</div>
  </footer>

  <!-- MODAL CONTACT -->
  <Transition name="slide-up">
    <ContactHeader v-if="showContact" @close="showContact = false" />
  </Transition>
</template>

<script setup>
import { ref } from "vue";
import ContactHeader from "../components/specific/contactHeader.vue";

const showContact = ref(false);

function openContact() {
  showContact.value = true;
}
</script>

<style scoped>
.annexe {
  margin-top: 6em;
  display: flex;
  flex-direction: row;
  width: 50%;
  position: relative;
  left: 0;
  justify-content: space-evenly;
  margin-bottom: 4em;
}

.ContenuDisplay {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.plateformeDisplay {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.GitHub {
  text-decoration: none;
  color: #0a0908;
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
  z-index: 1;
  text-transform: capitalize;
  font-size: 1.1em;
  padding-right: 1em;
}

/* Animation du fond coloré sur hover (avant l'élément) */
.GitHub::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: black;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-in-out;
}

/* Quand on passe la souris → animation d'apparition du fond */
.GitHub:hover::before,
.GitHub:focus::before {
  transform: scaleX(1);
  transform-origin: left;
}

/* Le texte devient blanc au hover */
.GitHub:hover,
.GitHub:focus {
  color: white;
}

footer {
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  gap: 16px;
  font-family: "Archivo", sans-serif;
  text-transform: uppercase;
  padding-right: 20px;
  color: #0a0908;
}

/* ANIMATION SLIDE DU BAS */
.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 1;
}

.slide-up-enter-active {
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-up-enter-to {
  transform: translateY(0%);
}

/* SORTIE */
.slide-up-leave-from {
  transform: translateY(0%);
}

.slide-up-leave-active {
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
