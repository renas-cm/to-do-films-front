<script setup>
import { onMounted, ref } from "vue";
import { useFilmsStore } from "@/stores/film";

const filmsStore = useFilmsStore();
const newFilmTitle = ref("");

onMounted(async () => {
  await filmsStore.listFilms();
  await filmsStore.loadWatched();
});

const addFilm = async () => {
  if (newFilmTitle.value.trim()) {
    await filmsStore.addFilm({ Title: newFilmTitle.value });
    newFilmTitle.value = "";
  }
};

const watchedFilm = async (filmId) => {
  await filmsStore.watchedFilm(filmId);
};

const deleteFilm = async (film) => {
  await filmsStore.deleteFilm(film);
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

        <button class="addFilm" @click="addFilm">Enter</button>
      </div>

      <div v-for="film in filmsStore.state.films" :key="film.id">
        {{ film.Title }}
        <button @click="watchedFilm(film); deleteFilm(film)">Já vi</button>
      </div>
    </div>

    <div>
      <div>
        <h1>JA vi este filme</h1>
      </div>

      <div>
        <div v-for="watched in filmsStore.state.watchedFilm" :key="watched.id">
          {{ watched.Title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
