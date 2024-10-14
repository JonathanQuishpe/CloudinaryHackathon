<script setup>
import CustomHeader from "@/components/CustomHeader.vue";
</script>

<template>
  <div class="container py-3">
    <custom-header />
    <main>
      <RouterView />
    </main>
  </div>
</template>
<style>
body {
  background-color: #0b0b0b !important; /* Fondo negro */
  color: #ff7518 !important; /* Texto naranja */
}
h1,
h2,
h3,
h4,
h5,
h6,
small,
p,
.title {
  font-family: "Creepster", cursive;
  color: #ff7518; /* Naranja */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
}

.flicker {
  animation: flicker 1.5s infinite alternate;
}

@keyframes flicker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.btn-halloween {
  background-color: #ff7518;
  border-color: #ff7518;
  color: black;
  box-shadow: 0px 0px 15px rgba(255, 117, 24, 0.8);
}

.btn-halloween:hover {
  background-color: #e5650a;
  color: white;
}
</style>
