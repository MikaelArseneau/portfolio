<template>
  <section class="propos" id="about">
    <p class="propos__description">
      <span v-for="(word, index) in words" :key="index" class="word">
        {{ word }}
        <span class="overlay"></span>
      </span>
    </p>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const text =
  "Passionné par le développement front-end et le montage vidéo, je m'efforce de créer des expériences utilisateur engageantes et visuellement attrayantes.";
const words = ref(text.split(" "));

onMounted(() => {
  const overlays = gsap.utils.toArray(".overlay");

  overlays.forEach((overlay) => {
    gsap.to(overlay, {
      width: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: overlay,
        start: "top 80%", // quand le mot arrive à 80% du viewport
        toggleActions: "play none none none",
      },
    });
  });
});
</script>

<style scoped>
.propos {
  width: 100%;
  padding: 2rem;
  background-color: #0a0908;
  box-sizing: border-box;
}

.propos__description {
  font-family: "Archivo", sans-serif;
  font-size: 2.5rem;
  line-height: 1.6;
  color: #ced3dc;
  font-weight: 800;
}

.word {
  position: relative;
  display: inline-block;
  margin-right: 0.3em;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: #0a0908;
  width: 100%;
  left: 0;
  top: 0;
}
</style>
