import { reactive } from 'vue'
import filmService from '@/services/filmsList'
import addFilmService from '@/services/addFilm'
import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('listFilms', () => {

  const state = reactive({
    films: [],
    film: null,
  })

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
      state.films.push(filmData) = await addFilmService.addFilm(filmData);
    } catch (error) {
      console.error("Error adding film:", error);
    }
  };

  return { state, listFilms, addFilm }
})


