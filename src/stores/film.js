import { reactive } from 'vue'
import filmService from '@/services/filmsList'
import addFilmService from '@/services/addFilm'
import watchedService from '@/services/watchedFilm';
import deleteService from '@/services/deleteFilm';
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

  const watchedFilm = async (filmId) => {
    try {
    const watched = await watchedService.watchedFilm(filmId);
    state.watchedFilm.push(watched);
    state.films = state.films.filter(film => film !== filmId);
    } catch (error) {
      console.error("Error marking film as watched:", error);
    }

  };

  //load the watched films

  const loadWatched = async () => {
    try {
      state.watchedFilm = await watchedService.getWatched();
    }
    catch (error) {
      console.error('Error fetching watched films:', error);
  }
};

 //delete the film

const deleteFilm = async (film) => {
  try{
    console.log(film)
    const deleteFilm = await deleteService.deleteFilm(film)
    state.films = state.films.filter(film => film !== deleteFilm)
  }
  catch (error){
    console.error('error deleting film:', error)
  }
}

  return { state, listFilms, addFilm, watchedFilm, loadWatched, deleteFilm };
});



