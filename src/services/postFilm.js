import axios from "axios";

class AddFilmService {
  async addFilm(Film) {
    try {
      const response = await axios.post("http://127.0.0.1:8000/Filmes/", Film);
      return response.data;
    } catch (error) {
      console.error("Error adding film:", error);
      throw error;
    }
  }
}

export default new AddFilmService();
