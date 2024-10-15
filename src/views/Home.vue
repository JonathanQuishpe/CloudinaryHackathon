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
  <section class="home section" id="home">
    <div class="shape-small"></div>
    <div class="shape-big"></div>

    <div class="home-container container grid">
      <div class="home-data">
        <h1 class="home-title">
          <span>Halloween</span> Portadas de terror!!
          <img
            src="https://i.postimg.cc/TY6TpF1P/stars.png"
            alt="image"
            class="home-title-img1"
          />
          <img
            src="https://i.postimg.cc/TY6TpF1P/stars.png"
            alt="image"
            class="home-title-img2"
          />
        </h1>

        <p class="home-description">
          Esta aplicación, desarrollada en Vue, está diseñada para sumergirte en el
          espíritu de Halloween. Te permite seleccionar una película de terror y subir una
          foto. Una vez que la imagen es subida, la app la transforma con un toque
          terrorífico, añadiendo el título de la película en un estilo escalofriante
          acorde con la temática de Halloween. Además, puedes descargar la imagen
          modificada con un simple clic, obteniendo una espeluznante fusión entre tu foto
          y el título de la película, ideal para compartir en la noche más aterradora del
          año. ¡Crea recuerdos aterradores y únicos!
        </p>
      </div>
      <img
        src="https://i.postimg.cc/mgkJDyYD/home-pumpkin.png"
        alt="image"
        class="home-img"
      />
      <img
        src="https://i.postimg.cc/dt2ryb9N/home-tree1.png"
        alt="image"
        class="home-tree1"
      />
      <img
        src="https://i.postimg.cc/TwdHzj3f/home-tree2.png"
        alt="image"
        class="home-tree2"
      />
    </div>
  </section>
  <section class="about section" id="about">
    <div class="shape-small"></div>
    <div class="shape-big"></div>

    <div class="about-container container grid">
      <div class="about-data" v-if="!photo">
        <h2 class="section-title">Escoge una pelicula</h2>

        <v-select
          :options="movies"
          label="title"
          v-model="movie"
          placeholder="Selecciona una pelicula"
        >
          <template #option="{ title, poster_path }">
            <div style="display: flex; align-items: center; color: black">
              <img
                style="width: 30px; object-fit: cover; margin-right: 10px"
                :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
              />
              <h5 style="margin: 0">{{ title }}</h5>
            </div>
          </template>
          <template #selected-option="{ title, poster_path, overview }">
            <div style="display: flex; align-items: center; color: white">
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
        <upload-widget v-if="movie" @photo-upload="photoUpload" />
      </div>
      <div class="about-data" v-if="photo">
        <button type="button" class="button" @click="reset">Generar otra</button>
      </div>

      <img
        src="https://i.postimg.cc/YScSwhH0/about-scare.png"
        alt="image"
        class="about-img"
        v-if="!photo"
      />
      <CldImage
        class="about-img"
        v-if="photo"
        :publicId="photo.public_id"
        :title="movie.title"
        :border="movie.border_color"
        :text="movie.text_color"
      />
    </div>
  </section>
</template>
