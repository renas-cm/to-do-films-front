import { reactive } from 'vue'
import filmService from '@/services/filmsList'
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

  return { state, listFilms, }
})


