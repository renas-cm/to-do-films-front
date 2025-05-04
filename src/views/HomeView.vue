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
  <div class="flex flex-col w-screen h-screen bg-black text-white gap-4">
    <div class="flex flex-col items-center  border-3" style="padding: 5%">
      <div>
        <h1>Para ver</h1>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex gap-2">
          <input class="rounded-2xl border-1 placeholder:pl-[5%]" type="text" placeholder="adicionar filme" v-model="newFilmTitle" />
          <button class="px-3  rounded-2xl border-1" @click="postFilm">Enter</button>
        </div>

        <div class="flex justify-center gap-4 " v-for="film in filmsStore.state.films" :key="film.id">
          {{ film.Title }}
          <button @click="patchFilm(film)">Visto</button>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col items-center  border-3" style="padding: 5%">
        <div>
          <h1 class="text-red-500" >Filmes assistidos</h1>
        </div>

        <div>
          <div v-for="watched in filmsStore.state.watchedFilms" :key="watched.id">
            {{ watched.Title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
