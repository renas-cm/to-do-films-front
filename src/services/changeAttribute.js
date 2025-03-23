import axios from 'axios'

class ChangeAttributeService {
  async ChangeAttribute(filmData) {
    const data = {
      id: filmData.id,
      Title: filmData.Title,
      Watched: true
    }
   try{
    const response = await axios.patch(`http://127.0.0.1:8000/Filmes/${data.id}/`, data)
    return response.data
   }
    catch (error) {
      console.error('Error marking film as watched:', error)
    }
  }
}

export default new ChangeAttributeService()
