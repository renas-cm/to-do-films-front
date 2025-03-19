import { ref } from 'vue'
import axios from 'axios';

async function getFilms() {
    const response = await axios.get('http://127.0.0.1:8000/Filmes/')
    return 'sucesso'
}

export{getFilms}
