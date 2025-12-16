<script setup>
import AppHeader from "./components/layout/Header.vue";
import heroSection from "./views/heroSection.vue";
import Projet from "./views/projetSection.vue";
import ProposSection from "./views/ProposSection.vue";
import Contact from "./views/contact.vue";
import Competence from "./components/specific/Competence.vue";
import heroAnimaiton from "./components/specific/heroAnimaiton.vue";
</script>

<template>
  <div id="app">
    <header></header>
    <main>
      <heroSection />
      <ProposSection />
      <projet></projet>
      <Competence />

      <Contact />
    </main>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
