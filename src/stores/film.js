import { reactive } from 'vue'
import { defineStore } from 'pinia'

import changeAttributes from '@/services/changeAttribute';
import getFilmsService from '@/services/getFilms'
import postFilmService from '@/services/postFilm'

export const useFilmsStore = defineStore('listFilms', () => {

  const state = reactive({
    films: [],
    watchedFilms: [],
    film: null,
  })

  //list the films

  const getFilms = async () => {
    try {
      state.films = await getFilmsService.getFilms()
    }
    catch (error) {
      console.error('Error fetching films:', error)
    }
  }

  //list the watched films

  const getWatchedFilms = async () => {
    try {
      state.watchedFilms = await getFilmsService.getWatchedFilms()
    }
    catch (error) {
      console.error('Error fetching films:', error)
    }
  }

  //adding the film

  const postFilm = async (filmData) => {
    try {
      const postFilm = await postFilmService.addFilm(filmData);
      state.films.push(postFilm);
    } catch (error) {
      console.error("Error adding film:", error);
    }
  };

  //Changing attribute to (watched = true)

  const patchFilm = async (filmData) => {
    try {
      const watched = await changeAttributes.ChangeAttribute(filmData);
      await getFilms();
      await getWatchedFilms();
      return watched;
    } catch (error) {
      console.error("Error marking film as watched:", error);
    }

  };

  return { state, getFilms, postFilm, patchFilm, getWatchedFilms };
});



