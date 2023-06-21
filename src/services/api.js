import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchGalleryByQuery = async searchQuery => {
  const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
  const response = await axios.get(
    `?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default fetchGalleryByQuery;
