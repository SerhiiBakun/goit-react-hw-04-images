import axios from 'axios';

const API_KEY = '30765705-c14899d15262e44858655656a';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
