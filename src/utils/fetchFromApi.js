import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
//  ye chizi ke inja nazaramo jaln krd datas ke az fetch migirm
// aval data haro  data.item  mikonim to feed.js
//  bad to videos  miaim  hamono item.id.videoId   mikon va passesh midim to videos card :)
