import axios from 'axios';

const axiosCreate = axios.create({
  baseURL: 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality',
  params: { city: 'Seattle' },
  headers: {
    'X-RapidAPI-Key': '7b6e5f487emsh92bba5aae0e0eeap1c7511jsnd6eac74856da',
    'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
  }
});

export default axiosCreate