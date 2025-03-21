<script setup>
import { onMounted, ref } from "vue";
import { useFilmsStore } from "@/stores/film";

const filmsStore = useFilmsStore();
const newFilmTitle = ref("");
const watched = ref("");

onMounted(async () => {
  await filmsStore.listFilms();
});

const addFilm = async () => {
  if (newFilmTitle.value.trim()) {
    await filmsStore.addFilm({ Titulo: newFilmTitle.value });
    newFilmTitle.value = "";
  }
};

const WatchedFilm = async () => {
  if (watched.value.trim()) {
    await filmsStore.watched({ Titulo: watched.value });
    newFilmTitle.value = "";
  }
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
        {{ film.Titulo }}
        <button @click="WatchedFilm">Já vi</button>
      </div>
    </div>

    <div>
      <div>
        <h1>JA vi este filme</h1>
      </div>

      <div>
        <div v-for="watched in filmsStore.state.watchedFilm" :key="watched.id">
          {{ watched.Titulo }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
