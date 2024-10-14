<script setup>
import { ref, onMounted } from "vue";
import CldImage from "../components/CldImage.vue";

const photos = ref([]);
const loading = ref(true);

const getData = async (tag) => {
  const response = await fetch(
    `https://res.cloudinary.com/${
      import.meta.env.VITE_CLOUD_NAME
    }/image/list/${tag}.json`
  );
  const data = await response.json();
  photos.value = data.resources;
  loading.value = false;
};

onMounted(async () => {
  await getData("myphotoalbum-vue");
  console.log(photos.value);
});
</script>
<template>
  <div class="row">
    <div class="col-md-12" v-if="loading">Cargando fotos......</div>
    <div class="col-md-12" v-if="!loading && !photos.length">
      No se encontraron resultados
    </div>
  </div>
  <div class="row">
    <div v-for="(photo, idx) in photos" :key="idx" class="col-md-4">
      <CldImage :publicId="photo.public_id" class="w-100" :title="'dsada'" />
    </div>
  </div>
</template>
