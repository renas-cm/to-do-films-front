import axios from "axios";

class deleteService {
  async deleteFilm(filmData) {
    try {
      const response = await axios.delete('http://127.0.0.1:8000/Filmes/', filmData)
      return response.data
    }
    catch (error) {
      console.error('Error deleting film:', error)
      throw error
    }
  }
}

export default new deleteService()
