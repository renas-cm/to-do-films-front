import { reactive } from 'vue'
import filmService from '@/services/filmsList'
import addFilmService from '@/services/addFilm'
import watchedService from '@/services/watchedFilm'
import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('listFilms', () => {

  const state = reactive({
    films: [],
    watchedFilm: [],
    film: null,
  })

  //list the films

  const listFilms = async () => {
    try {
      state.films = await filmService.getFilms()
    }
    catch (error) {
      console.error('Error fetching films:', error)
    }
  }

  //adding the film

  const addFilm = async (filmData) => {
    try {
      const addFilm = await addFilmService.addFilm(filmData);
      state.films.push(addFilm);
    } catch (error) {
      console.error("Error adding film:", error);
    }
  };

  //watched the film

  const watchedFilm = async (filmData) => {
    try {
      const watched = await watchedService.watchedFilm(filmData);
      state.watchedFilm.push(watched);
    } catch (error) {
      console.error("Error marking film as watched:", error);
    }
  };

  return { state, listFilms, addFilm, watchedFilm };
});



