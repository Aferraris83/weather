import { create } from 'apisauce';

const api = create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  timeout: 5000,
});

export default api;
