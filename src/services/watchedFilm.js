import axios from "axios";

class WatchedFilmService {
  async watchedFilmService (watchedFilm) {
    try {
      const response = await axios.post ("http://127.0.0.1:8000/FilmesAssistidos/", watchedFilm)
      return response.data;
    }
    catch (error) {
      console.error("Error adding film:", error);
      throw error;
    }
  }
}

export default new WatchedFilmService();