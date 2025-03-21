import axios from 'axios';

class FilmsService {
  async getFilms() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/Filmes/');
      return response.data
    }
    catch (error) {
      console.error('Error fetching films:', error);
    }
  }
}

export default new FilmsService();

