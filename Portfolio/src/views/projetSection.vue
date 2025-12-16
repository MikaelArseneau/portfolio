<template>
  <h2 class="projects-title" id="projets">Mes Projets *</h2>

  <div class="projects-wrapper">
    <div class="image-container-sticky">
      <div class="image-container" tabindex="0">
        <img
          v-for="(projet, index) in projets"
          :key="index"
          :src="projet.image"
          :alt="`Aperçu du projet ${projet.titre}`"
          class="image_projet"
          :class="{ active: activeProjectIndex === index }"
        />
      </div>
    </div>

    <div class="projects-list">
      <div
        v-for="(projet, index) in projets"
        :key="index"
        :data-index="index"
        class="project-section"
        :class="{ active: activeProjectIndex === index }"
      >
        <div class="projet_display">
          <h3 class="title">{{ projet.titre }}</h3>
          <div v-if="projet.description" class="project_content">
            <p v-html="projet.description"></p>

            <div v-if="projet.collaboration" class="collaboration">
              <h4>Collaboration :</h4>
              <ul>
                <li v-for="(collab, idx) in projet.collaboration" :key="idx">
                  {{ collab }}
                </li>
              </ul>
            </div>

            <div v-if="projet.logiciel" class="logiciels">
              <h4>Logiciels :</h4>
              <ul>
                <li v-for="(log, idx) in projet.logiciel" :key="idx">
                  {{ log }}
                </li>
              </ul>
            </div>
            <div v-if="projet.resultat" class="resultat">
              <h4>Résultat :</h4>
              <p>{{ projet.resultat }}</p>
            </div>
            <div v-if="projet.site" class="resultat">
              <h4>Résultat :</h4>
              <a :href="projet.site" target="_blank">{{ projet.titre }}</a>
            </div>
            <!-- <div v-if="projet.gallery" class="parent">
              <div class="div1 grid-item">
                <img
                  v-if="projet.gallery[0]"
                  :src="projet.gallery[0]"
                  :alt="`${projet.titre} - Image 1`"
                />
              </div>
              <div class="div2 grid-item">
                <img
                  v-if="projet.gallery[1]"
                  :src="projet.gallery[1]"
                  :alt="`${projet.titre} - Image 2`"
                />
              </div>
              <div class="div3 grid-item">
                <img
                  v-if="projet.gallery[2]"
                  :src="projet.gallery[2]"
                  :alt="`${projet.titre} - Image 3`"
                />
              </div>
              <div class="div4 grid-item">
                <img
                  v-if="projet.gallery[3]"
                  :src="projet.gallery[3]"
                  :alt="`${projet.titre} - Image 4`"
                />
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeProjectIndex = ref(0);

const projets = [
  {
    titre: "Aureo.",
    description:
      "Plateforme dédiée à la créativité et à l'inspiration, pour découvrir, partager et admirer des œuvres artistiques variées — peinture, photographie, design, musique ou projets multimédias *",
    image: "../../public/aureo.png",

    logiciel: ["Figma", "Vscode"],
    site: "https://mikaelarseneau.github.io/Aureo/",
    gallery: [
      "../../public/aureo.png",
      "../../public/aureo2.png",
      "../../public/aureo3.png",
      "../../public/aureo4.png",
    ],
  },
  {
    titre: "Métrage.",
    description:
      "Site de critiques cinématographiques — films, séries et courts-métrages — rédigées avec soin et passion *",
    collaboration: ["Alexandre Gendron", "Rafael Angon Dubé"],
    logiciel: ["Figma", "Wordpress"],
    image: "../../public/metrage.png",
    gallery: [
      "../../public/metrage.png",
      "../../public/metrage2.png",
      "../../public/arbre_en_face.webp",
      "../../public/hero-bg.jpg",
    ],
  },
  {
    titre: "Transforsmonstre.",
    collaboration: ["Alexandre Gendron", "Rafael Angon Dubé", "Mathieu Willet"],
    image: "../../public/hero-bg.jpg",
    description:
      "Un court-métrage créé à partir de scènes de films d'Halloween pour donner vie à un tout nouveau monstre. Projeté sur la Place Bell le 31 octobre 2025 *",
    logiciel: ["Davinci"],
    site: "Google.com",
    gallery: [
      "../../public/hero-bg.jpg",
      "../../public/metrage.png",
      "../../public/aureo.png",
      "../../public/arbre_en_face.webp",
    ],
  },
  {
    titre: "Arbre en face.",
    image: "../../public/arbre_en_face.webp",
    collaboration: ["Alexandre Gendron", "Rafael Angon Dubé", "Mathieu Willet"],
    description:
      "Une expérience où les participants font apparaître des graines en forme de visages. Celles-ci tombent et s'enracinent, puis peuvent être arrosées grâce à un arrosoir virtuel. Selon la quantité d'eau reçue, elles deviennent une fleur, un buisson ou un arbre, toujours avec les visages des participants précédents intégrés dans les fleurs, fruits ou pommes *",
    logiciel: ["TouchDesigner"],
    resultat: "En développement",
    site: "https://mammouths.github.io/projet/#/",
    gallery: [
      "../../public/arbre_en_face.webp",
      "../../public/hero-bg.jpg",
      "../../public/metrage.png",
      "../../public/aureo.png",
    ],
  },
];

let observer = null;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        activeProjectIndex.value = index;
      }
    });
  }, options);

  const sections = document.querySelectorAll(".project-section");
  sections.forEach((section) => {
    observer.observe(section);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.resultat {
  margin-bottom: 1em;
}
a {
  text-decoration: underline;
  color: #213547;
  font-size: 2em;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1em;
}
a:hover {
  color: rgba(100, 108, 255, 0.1);
}
.projects-title {
  padding: 2rem;
  font-size: 5rem;
  text-align: center;
  text-transform: uppercase;
}

.projects-wrapper {
  display: flex;
  gap: 4rem;
  padding: 3rem 2rem;
  min-height: 100vh;
}

.image-container-sticky {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
  height: fit-content;
  flex-shrink: 0;
}

.image-container {
  position: relative;
  width: 300px;
  aspect-ratio: 16 / 9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  outline: none;
}

.image-container:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.image-container:focus {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.image_projet {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image_projet.active {
  opacity: 1;
}

.projects-list {
  flex: 1;
  padding-bottom: 40vh;
}

.project-section {
  scroll-snap-align: start;
  max-height: 100vh;
  display: flex;
  align-items: center;
}

.projet_display {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid #213547;
  padding: 2rem 0;
  opacity: 0.3;
  transition: opacity 0.5s ease;
}

.project-section.active .projet_display {
  opacity: 1;
}

.title {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
}

.project_content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.project_content p {
  margin: 0;
}

.texte_apro {
  font-weight: 600;
  color: #646cff;
}

.collaboration,
.logiciels {
  margin-top: 1rem;
}

.collaboration h4,
.logiciels h4 {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  text-transform: uppercase;
}

.collaboration ul,
.logiciels ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.collaboration li,
.logiciels li {
  background: rgba(100, 108, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-wrapper {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .image-container-sticky {
    position: relative;
    top: 0;
    transform: none;
  }

  .image-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .title {
    font-size: 1.8rem;
  }

  .projects-title {
    font-size: 3rem;
  }

  .parent {
    height: 400px;
  }
}
</style>
