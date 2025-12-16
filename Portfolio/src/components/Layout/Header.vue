<template>
  <header class="header">
    <h1 class="header__title">Portfolio</h1>

    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <p>Projet</p>
        </li>
        <li class="header__nav-item">
          <p>Propos</p>
        </li>
        <li class="header__nav-item">
          <p class="btn_contact">Contact</p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import router from "../../routes";
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0.5rem 0;
}

.header__nav-list {
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-right: 0.8em;
  padding: 0;
  align-items: center;
}

.header__nav-item {
  list-style: none;
  margin: 0 1rem;
}

.header__title {
  font-size: 1.8rem;
  margin-left: 2em;
  font-family: "Clash", sans-serif;
  letter-spacing: 0.08em;
  color: #6290c3;
  transition: transform 0.3s ease;
}

.header__title:hover {
  cursor: pointer;
  transform: rotate(-2deg);
}

a {
  font-family: "Archivo", sans-serif;
  color: #071108;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 850;
  letter-spacing: 0.08em;
}

.btn_contact {
  position: relative;
  z-index: 0;
  overflow: hidden;
  border-radius: 50px;
  border: 2px solid #ff5a14;
  padding: 0.5em 4em;
  background: #fff;
  color: black;
  font-weight: 900;
  transition: color 0.4s, box-shadow 0.4s, scale 0.1s;
  cursor: pointer;
}
.btn_contact:hover {
  scale: 1.05;
}
.btn_contact:active {
  scale: 0.95;
}

.btn_contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: #ff5a14;
  border-radius: 50px 50px 50px 50px;
  transition: width 0.45s ease;
  z-index: -1;
}

.btn_contact:hover::before {
  width: 110%;
}

.btn_contact:hover {
  color: white;
}
</style>
