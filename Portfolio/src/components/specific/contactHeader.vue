<template>
  <div class="container_contact">
    <button class="btn_contact" @click="$emit('close')">Retour au site</button>
    <h2 class="title_contact">Me contacter *</h2>
    <div class="contact_page">
      <div class="titre_info">Parlons d'un projet ou même du Canadien</div>
      <a class="email" href="mailto:mikael.arseneau@hotmail.ca">
        mikael.arseneau@hotmail.ca
      </a>
      <div class="ville">Laval / Montréal</div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
</script>

<style scoped>
.container_contact {
  position: fixed;
  inset: 0;
  background-color: #ee6055;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
  gap: 3rem;
}

.title_contact {
  color: #fcf7f8;
  font-size: 4em;
  font-family: "Clash", sans-serif;
  letter-spacing: 0.5px;
  margin: 0;
}

.contact_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: #fcf7f8;
}

.titre_info {
  font-size: 1.5rem;
  font-family: "Archivo", sans-serif;
  text-align: center;
  max-width: 600px;
  color: #fcf7f8;
}

.email {
  font-size: 2rem;
  font-weight: bold;
  color: #fcf7f8;
  position: relative;
  padding: 0.5em 1em;
  transition: color 0.3s;
  cursor: pointer;
}

.email::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #0a0908;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s ease;
}

.email:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.email:hover {
  color: #fcf7f8;
}

.ville {
  font-size: 1.2rem;
  color: #0a0908;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.btn_contact {
  position: absolute;
  top: 20px;
  right: 20px;
  overflow: hidden;
  border-radius: 50px;
  border: 2px solid #0a0908;
  padding: 0.5em 2em;
  background: #fcf7f8;
  font-weight: 900;
  cursor: pointer;
  transition: color 0.4s, scale 0.1s;
  position: relative;
  z-index: 1;
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
  background: #0a0908;
  transition: width 0.45s ease;
  z-index: -1;
}

.btn_contact:hover::before {
  width: 110%;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .title_contact {
    font-size: 2.5em;
  }

  .email {
    font-size: 1.2rem;
  }

  .titre_info {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  .btn_contact {
    padding: 0.5em 1.5em;
    font-size: 0.9rem;
  }
}
</style>
