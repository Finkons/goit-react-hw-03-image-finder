import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = '27580629-0dcde42b9c8f51584518cfd0d'

async function fetchImages(name, page) {
  try {
    const response = await axios.get(
      `?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export default fetchImages