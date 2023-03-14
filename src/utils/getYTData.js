import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';
const options = {
  method: 'GET',
  params: {part: 'snippet', 
  videoId: 'M7FIvfx5J10',
    maxResults: '50',
    regionCode: 'US',
},
  headers: {
    'X-RapidAPI-Key': '88571bbdf5msh13b99b195ba4603p1c2f79jsn655ecc727fe9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    try {
        const response = await axios.request(BASE_URL+url,options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }