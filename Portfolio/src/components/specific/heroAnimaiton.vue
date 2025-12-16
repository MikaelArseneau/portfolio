<template>
  <div class="animationPage">
    <div class="numero">
      <div class="numero1">99</div>
      <div class="numero1">78</div>
      <div class="numero1">42</div>
      <div class="numero1">0</div>
    </div>
    <div class="scroller">Scroller</div>
  </div>
</template>

<style scoped>
.animationPage {
  position: sticky;
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.numero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  align-self: flex-start;
}

.numero1 {
  font-size: 5em;
  opacity: 0; /* invisible au départ */
}

.scroller {
  font-size: 3em;
  opacity: 0; /* invisible au départ */
  position: absolute;
}
</style>

<script>
import { onMounted } from "vue";
import gsap from "gsap";

export default {
  setup() {
    onMounted(() => {
      const numeros = document.querySelectorAll(".numero1");
      const scroller = document.querySelector(".scroller");
      const page = document.querySelector(".animationPage");

      // Timeline pour les nombres
      let tl = gsap.timeline();

      // Animation des nombres du bas vers le haut
      tl.fromTo(
        numeros,
        { opacity: 0 },
        {
          opacity: 1,
          y: 0,
          stagger: { each: 0.5, from: "end" },
          duration: 0.01,
          ease: "linear",
        }
      )

        // Une fois le dernier nombre affiché (99), tout disparaît
        .to(numeros, {
          opacity: 0,
          duration: 0.5,
          delay: 0.2, // petit délai pour que le 99 reste visible un instant
        })

        // Le texte "Scroller" apparaît au centre
        .to(page, {
          scale: 0,
          duration: 0.2,
        });
    });
  },
};
</script>
