import axios from 'axios'

class FilmsService {
  async getFilms() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/FilterFilmes/?Watched=False")
      return response.data
    } catch (error) {
      console.error('Error fetching films:', error)
    }
  }

  async getWatchedFilms() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/FilterFilmes/?Watched=True")
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching watched films:', error)
    }
  }
}

export default new FilmsService()
