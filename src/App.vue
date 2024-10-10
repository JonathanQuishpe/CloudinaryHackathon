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
