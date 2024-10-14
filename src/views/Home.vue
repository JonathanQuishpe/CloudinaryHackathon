<script setup>
import { onMounted, ref } from "vue";
import UploadWidget from "../components/UploadWidget.vue";
import CldImage from "../components/CldImage.vue";
import moviesEnum from "../movies";

const movies = ref([]);
const movie = ref(null);
const photo = ref(null);
const photoUpload = (value) => {
  photo.value = value.info;
};

const reset = () => {
  photo.value = null;
  movie.value = null;
};

onMounted(() => {
  movies.value = moviesEnum;
});
</script>

<template>
  <div class="row mb-3 text-center justify-content-center">
    <div class="col-md-5" v-if="!photo">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <p>
            Esta aplicación, desarrollada en Vue, está diseñada para sumergirte
            en el espíritu de Halloween. Te permite seleccionar una película de
            terror y subir una foto. Una vez que la imagen es subida, la app la
            transforma con un toque terrorífico, añadiendo el título de la
            película en un estilo escalofriante acorde con la temática de
            Halloween. Además, puedes descargar la imagen modificada con un
            simple clic, obteniendo una espeluznante fusión entre tu foto y el
            título de la película, ideal para compartir en la noche más
            aterradora del año. ¡Crea recuerdos aterradores y únicos!
          </p>
        </div>
        <div class="col-md-12">
          <v-select
            :options="movies"
            label="title"
            v-model="movie"
            placeholder="Selecciona una pelicula"
          >
            <template #option="{ title, poster_path }">
              <div style="display: flex; align-items: center">
                <img
                  style="width: 50px; object-fit: cover; margin-right: 10px"
                  :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
                />
                <h5 style="margin: 0">{{ title }}</h5>
              </div>
            </template>
            <template #selected-option="{ title, poster_path, overview }">
              <div style="display: flex; align-items: center">
                <img
                  style="width: 100px; object-fit: cover; margin-right: 10px"
                  :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
                />
                <div>
                  <h5 style="margin: 0">{{ title }}</h5>
                  <small>{{ overview }}</small>
                </div>
              </div>
            </template>
          </v-select>
        </div>
        <div class="col-md-6 mt-3">
          <upload-widget v-if="movie" @photo-upload="photoUpload" />
        </div>
      </div>
    </div>
    <div class="col-md-7" v-if="photo">
      <button type="button" class="btn btn-danger mb-3" @click="reset">
        Generar otra
      </button>
      <p>Da click sobre la imagen para descargarla</p>
      <CldImage
        :publicId="photo.public_id"
        :title="movie.title"
        :border="movie.border_color"
        :text="movie.text_color"
      />
    </div>
  </div>
</template>
