<template>
  <!-- ANIMATION D'INTRO PAR-DESSUS -->
  <div v-if="showIntro" class="animationPage">
    <div class="numero">
      <div class="numero1">98 / 97 *</div>
      <div class="numero1">64 / 97 *</div>
      <div class="numero1">42 / 97 *</div>
      <div class="numero1">0 / 97 *</div>
    </div>
  </div>

  <!-- HERO EN DESSOUS -->
  <section class="hero" id="home" @click="spawnBall">
    <!-- BALLES -->
    <span
      v-for="ball in balls"
      :key="ball.id"
      class="ball"
      :style="{ left: ball.x + 'px', top: ball.y + 'px' }"
    />

    <!-- CONTENU HERO -->
    <div class="parent" :class="{ 'hero-visible': heroVisible }">
      <div class="div1"><p class="portfolio">Portfolio</p></div>
      <div class="div2">
        <p class="btn_contact" @click.stop="showContact = true">Contact</p>
      </div>
      <div class="div3">Mikael Arseneau</div>
      <div class="div4">2025 <span class="orange"> *</span></div>
      <div class="div5">
        Développeur <span class="orange-bg">Front-end</span>
      </div>
      <div class="div6">Laval / Montréal</div>
    </div>

    <!-- PAGE CONTACT PLEIN ÉCRAN -->
    <Transition name="slide-down">
      <ContactHeader v-if="showContact" @close="showContact = false" />
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ContactHeader from "../components/specific/contactHeader.vue";

const showContact = ref(false);
const showIntro = ref(true);
const heroVisible = ref(false);
const balls = ref([]);
let id = 0;

// Génération des balles au clic
function spawnBall(e) {
  const rect = e.currentTarget.getBoundingClientRect();

  balls.value.push({
    id: id++,
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });

  setTimeout(() => {
    balls.value.shift();
  }, 800);
}

onMounted(() => {
  // Bloquer le scroll pendant l'intro
  document.body.style.overflow = "hidden";

  const numeros = document.querySelectorAll(".numero1");

  // Timeline pour l'animation complète
  let tl = gsap.timeline();

  // Animation des nombres un par un du bas vers le haut
  tl.fromTo(
    numeros,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      stagger: {
        each: 0.4,
        from: "end",
        onStart: function () {
          // Cache le numéro précédent quand le suivant apparaît
          const index = Array.from(numeros).indexOf(this.targets()[0]);
          if (index < numeros.length - 1) {
            gsap.to(numeros[index + 1], { opacity: 0, duration: 0.2 });
          }
        },
      },
      duration: 0.5,
      ease: "power2.out",
    }
  )
    // Pause sur le dernier nombre (99)
    .to({}, { duration: 0.5 })

    // L'écran noir disparaît complètement
    .to(".animationPage", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        showIntro.value = false;
        // Réactiver le scroll
        document.body.style.overflow = "auto";
        // Animer l'apparition du hero
        setTimeout(() => {
          heroVisible.value = true;
        }, 100);
      },
    });
});
</script>

<style scoped>
/* === ANIMATION D'INTRO === */
.animationPage {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
}

.numero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  align-self: flex-start;
  padding: 2rem;
}

.numero1 {
  font-size: 5em;
  font-weight: bold;
  opacity: 0;
}

.numero1 .orange {
  color: #ee6055;
}

/* === HERO === */
.hero {
  width: 100%;
  height: 100vh;
  background-color: #fcf7f8;
  position: relative;
  overflow: hidden;
}

.parent {
  padding: 1em;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  text-align: center;
  color: #0a0908;
  user-select: none;
  position: relative;
  z-index: 2;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .parent {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 1em;
  }

  .div1 {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .div2 {
    grid-column: 3 / 4 !important;
    grid-row: 1;
  }
  .div3 {
    grid-column: 1 / 4 !important;
    grid-row: 3 !important;
  }
  .div4 {
    grid-column: 1 / 2;
    grid-row: 6 !important;
  }
  .div5 {
    grid-column: 2 / 3 !important;
    grid-row: 6 !important;
  }
  .div6 {
    grid-column: 3 / 4 !important;
    grid-row: 6 !important;
  }
}

@media (max-width: 768px) {
  .parent {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 2em;
    padding: 2em 1em;
  }

  .div1,
  .div2,
  .div3,
  .div4,
  .div5,
  .div6 {
    grid-column: 1 !important;
    grid-row: auto !important;
  }

  .div1 {
    font-size: 1.5rem;
  }

  .div3 {
    font-size: 2rem;
    order: 1;
  }

  .div5 {
    order: 2;
  }

  .div6 {
    order: 3;
  }

  .div4 {
    order: 4;
  }

  .div2 {
    order: 5;
  }

  .div1 {
    order: 6;
  }

  .btn_contact {
    padding: 0.5em 2em;
  }
}

.parent > div {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.parent.hero-visible > div {
  opacity: 1;
  transform: translateY(0);
}

/* Délais échelonnés pour chaque élément */
.parent.hero-visible .div1 {
  transition-delay: 0.1s;
}
.parent.hero-visible .div2 {
  transition-delay: 0.2s;
}
.parent.hero-visible .div3 {
  transition-delay: 0.3s;
}
.parent.hero-visible .div4 {
  transition-delay: 0.4s;
}
.parent.hero-visible .div5 {
  transition-delay: 0.5s;
}
.parent.hero-visible .div6 {
  transition-delay: 0.6s;
}

.div1 {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.div2 {
  grid-column-start: 5;
}
.div3 {
  grid-column-start: 3;
  grid-row-start: 3;
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.div4 {
  grid-row-start: 5;
}
.div5 {
  grid-column-start: 3;
  grid-row-start: 5;
}
.div6 {
  grid-column-start: 5;
  grid-row-start: 5;
}

.portfolio {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.portfolio:hover {
  transform: rotate(-2deg);
}
.portfolio:active {
  scale: 0.95;
}

.orange {
  color: #ee6055;
}
.orange-bg {
  background-color: #ee6055;
  padding: 0.1em 0.3em;
  color: #fcf7f8;
}

.btn_contact {
  position: relative;
  z-index: 0;
  overflow: hidden;
  border-radius: 50px;
  border: 2px solid #0a0908;
  padding: 0.5em 4em;
  background: #fcf7f8;
  font-weight: 900;
  cursor: pointer;
  transition: color 0.4s, scale 0.1s;
}
.btn_contact:hover {
  scale: 1.05;
  color: white;
}
.btn_contact:active {
  scale: 0.95;
}
.btn_contact::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 0%;
  background: #ee6055;
  transition: width 0.45s ease;
  z-index: -1;
}
.btn_contact:hover::before {
  width: 110%;
}

.ball {
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #ee6055;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  animation: pop 0.8s ease forwards;
}

/* ENTRÉE */
.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 1;
}

.slide-down-enter-active {
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-down-enter-to {
  transform: translateY(0%);
}

/* SORTIE */
.slide-down-leave-from {
  transform: translateY(0%);
}

.slide-down-leave-active {
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-down-leave-to {
  transform: translateY(-100%);
}

@keyframes pop {
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
