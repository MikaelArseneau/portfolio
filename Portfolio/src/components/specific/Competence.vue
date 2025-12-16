<script setup>
import { onMounted } from "vue";
import { animate, scroll, inView, Motion } from "motion-v";

// Animation au montage du composant
onMounted(() => {
  const items = document.querySelectorAll(".texte-container");
  const container = document.querySelector(".img-group-container");

  container.style.height = `${items.length * 100}vh`;

  scroll(
    animate(".img-group", {
      transform: ["none", `translateX(-${items.length - 1}00vw)`],
    }),
    { target: container }
  );
});
</script>

<template>
  <article id="Competence">
    <header class="header_competence">
      <h2 class="premier">Compétences</h2>
      <h2 class="deuxieme">Compétences</h2>
      <h2 class="troisieme">Compétences</h2>
    </header>

    <section class="img-group-container">
      <div>
        <ul class="img-group">
          <li class="texte-container">
            <Motion
              class="texte-wrapper"
              :initial="{ scale: 0, opacity: 0 }"
              :inView="{ scale: 1, opacity: 1 }"
              :transition="{ type: 'spring', stiffness: 120, damping: 18 }"
            >
              <p>
                Maîtrise avancée de HTML, CSS et JavaScript pour des interfaces
                modernes et interactives. GSAP pour des animations fluides,
                immersives et orientées expérience, basées sur le scroll et
                l'interaction
              </p>
              <h3>HTML/CSS/JS *</h3>
            </Motion>
          </li>
          <li class="texte-container">
            <Motion
              class="texte-wrapper"
              :initial="{ y: -200, opacity: 0 }"
              :inView="{ y: 0, opacity: 1 }"
              :transition="{ type: 'spring', stiffness: 120, damping: 18 }"
            >
              <p>
                Maîtrise de Vue.js pour la création d'interfaces web dynamiques,
                réactives et modulaires. Attention portée à la structure des
                composants, à la fluidité des interactions et à la clarté de
                l'interface.
              </p>
              <h3>VUE.JS *</h3>
            </Motion>
          </li>
          <li class="texte-container">
            <Motion
              class="texte-wrapper"
              :initial="{ scale: 0.1, opacity: 0 }"
              :inView="{ scale: 1, opacity: 1 }"
              :transition="{ type: 'spring', stiffness: 120, damping: 18 }"
            >
              <p>
                Bonne maîtrise de CMS pour la création et la gestion de sites
                web flexibles et évolutifs. Capacité à structurer le contenu,
                personnaliser les thèmes et adapter l'interface aux besoins du
                projets
              </p>
              <h3>CMS *</h3>
            </Motion>
          </li>
          <li class="texte-container">
            <Motion
              class="texte-wrapper"
              :initial="{ scale: 0.1, opacity: 0 }"
              :inView="{ scale: 1, opacity: 1 }"
              :transition="{ type: 'spring', stiffness: 120, damping: 18 }"
            >
              <p>
                Utilisation de Figma pour concevoir des interfaces structurées
                et orientées expérience utilisateur. Travail sur l'UX, le
                prototypage et la cohérence visuelle
              </p>
              <h3>FIGMA *</h3>
            </Motion>
          </li>
          <li class="texte-container">
            <Motion
              class="texte-wrapper"
              :initial="{ scale: 0.1, opacity: 0 }"
              :inView="{ scale: 1, opacity: 1 }"
              :transition="{ type: 'spring', stiffness: 120, damping: 18 }"
            >
              <p>
                Connaissance des principes SEO pour optimiser la visibilité et
                la performance des sites web. Attention portée à la structure,
                aux balises, au contenu et aux bonnes pratiques pour le
                référencement naturel
              </p>
              <h3>SEO *</h3>
            </Motion>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style scoped>
.header_competence {
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: flex-end;
  padding: 2em;
  gap: -3em;
  overflow: hidden;
  text-transform: uppercase;
}
.deuxieme {
  font-family: "Clash", sans-serif;
}
.premier {
  align-self: self-start;
  margin-left: -100px;
  font-family: "Archivo", sans-serif;
}
.troisieme {
  align-self: self-end;
  margin-right: -100px;
  font-family: "Archivo", sans-serif;
}
.test {
  color: #1a1a1a;
  font-family: "Clash", sans-serif;
  text-align: center;
  margin-bottom: 1em;
  margin-top: 1em;
  font-size: 3em;
}
#Competence {
  width: 100vw;
}

#Competence h3 {
  margin-top: 1em;
  letter-spacing: 0.3px;
  color: aliceblue;
}

#Competence header,
#Competence footer {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-group-container {
  max-width: 100vw;
  position: relative;
  background-color: #1a1a1a;
}

.img-group-container > div {
  position: sticky;
  top: 0;
  overflow: hidden;
  height: 100vh;
}

.img-group {
  display: flex;
  max-width: 300px;
}

.texte-container {
  display: flex;
  width: 100vw;
  padding-right: 0.8em;
  height: 100vh;
  flex: 0 0 auto;
  gap: 1em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  font-family: "Archivo", sans-serif;
  font-size: 16px;
  width: 100vw;
  color: aliceblue;
}
.texte-wrapper {
  max-width: 600px; /* limite la largeur du texte */
  text-align: center;
  background-color: #ee6055;
  padding: 2em;
  display: inline-block; /* nécessaire pour que rotate fonctionne bien */
  transform-origin: center center;
}
#Competence header h2 {
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.2;
  overflow: hidden;
}

.texte-container h3 {
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.2;
  position: relative;
  bottom: 30px;
  display: inline-block;
}
@media (max-width: 800px) {
  .texte-wrapper {
    max-width: 300px;
  }
  .texte-container {
    font-size: 12px;
  }
}
@media (max-width: 600px) {
  #Competence header h2 {
    font-size: 50px;
  }
  .texte-container h3 {
    font-size: 30px;
  }
}
</style>
