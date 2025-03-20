<script setup>
import { onMounted } from 'vue';
import { useFilmsStore } from '@/stores/film';

const filmsStore = useFilmsStore();

onMounted (async() => {
  await filmsStore.listFilms();
});


</script>

<template>
  <div>
    <div class="tittleWatch">
      <h1>Filmes Para ver</h1>
    </div>

    <div class="toWatchList">
      <div v-for="film in filmsStore.state.films" :key="film.id">
        {{ film.Titulo }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
