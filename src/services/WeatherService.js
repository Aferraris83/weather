import api from '../config/api';

const defaultValues =
  {
    q: 'Buenos aires',
    lang: 'es',
    units: 'metric',
    appid: '542cf831e95c7d4f851f0331648d1680',
  };

export const weather = {
  weather: (city) => {
    if (city) {
      defaultValues.q = city;
    }
    return api.get('forecast', defaultValues);
  },
};

