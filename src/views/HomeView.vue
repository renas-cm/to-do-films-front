<script setup>
import { onMounted, ref } from 'vue';
import { useFilmsStore } from '@/stores/film';

const filmsStore = useFilmsStore();
const newFilmTitle = ref('');

onMounted (async() => {
  await filmsStore.listFilms();
});

const addFilm = async () => {
  if (newFilmTitle.value.trim()) {
    await filmsStore.addFilm({ Titulo: newFilmTitle.value });
    newFilmTitle.value = '';
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
        <input
          type="text"
          placeholder="adicionar filme"
          v-model="newFilmTitle"/>

        <button class="addFilm" @click="addFilm">Enter</button>
      </div>

      <div v-for="film in filmsStore.state.films" :key="film.id">
        {{ film.Titulo }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
