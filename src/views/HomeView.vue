<script setup>
import { onMounted, ref } from "vue";
import { useFilmsStore } from "@/stores/film";

const filmsStore = useFilmsStore();
const newFilmTitle = ref("");

onMounted(async () => {
  await filmsStore.getFilms();
  await filmsStore.getWatchedFilms();
});

const postFilm = async () => {
  if (newFilmTitle.value.trim()) {
    await filmsStore.postFilm({ Title: newFilmTitle.value });
    newFilmTitle.value = "";
  }
};

const patchFilm = async (filmData) => {
  await filmsStore.patchFilm(filmData);
};



</script>

<template>
  <div>
    <div class="tittleWatch">
      <h1>Filmes Para ver</h1>
    </div>

    <div class="toWatchList">
      <div>
        <input type="text" placeholder="adicionar filme" v-model="newFilmTitle" />

        <button class="addFilm" @click="postFilm">Enter</button>
      </div>

      <div v-for="film in filmsStore.state.films" :key="film.id">
        {{ film.Title }}
        <button @click="patchFilm(film)">Visto</button>
      </div>
    </div>

    <div>
      <div>
        <h1>Filmes assistindo</h1>
      </div>

      <div>
        <div v-for="watched in filmsStore.state.watchedFilms" :key="watched.id">
          {{ watched.Title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
