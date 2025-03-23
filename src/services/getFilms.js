import axios from 'axios'

class FilmsService {
  async getFilms() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/Filmes/?Watched=false')
      return response.data
    } catch (error) {
      console.error('Error fetching films:', error)
    }
  }

  async getWatchedFilms() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/Filmes/?Watched=true`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching watched films:', error)
    }
  }
}

export default new FilmsService()
