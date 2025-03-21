import axios from 'axios'

class watchedFilmService {
  async watchedFilm(filmData) {
    try {
      const data = {
        Title : filmData.id,
        Analise : null,
      }
      const response = await axios.post('http://127.0.0.1:8000/FilmesAssistidos/', data)
      return response.data
    } catch (error) {
      console.error('Error marking film as watched:', error)
      throw error
    }
  }

  async getWatched() {
     try {
      const response = await axios.get('http://127.0.0.1:8000/FilmesAssistidos/')
      return response.data
     }
     catch (error) {
      console.error('Error fetching watched films:', error)
     }
  }
}

export default new watchedFilmService()
