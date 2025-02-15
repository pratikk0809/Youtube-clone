import axios from "axios";

const URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY || 'b1b4806f65mshf2912bae8c34ab4p1d67d8jsn150a2d91594b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const api = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);

  return data;
};