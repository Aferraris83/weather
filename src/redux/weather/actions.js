import { weather } from '../../services/WeatherService';
import { getFiveDays } from '../../utils/transform';

export const actions = {
  GET_WEATHER: 'GET_WEATHER',
  GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
  GET_WEATHER_FAILURE: 'GET_WEATHER_FAILURE',
}

export const actionCreator = {
  getWeather: city => async (dispatch) => {
    dispatch({type: actions.GET_WEATHER});
    const resp = await weather.weather(city);
    if (resp.ok) {
      resp.data.nextDays = getFiveDays(resp.data.list);
      resp.data.today = resp.data.list[0];
      dispatch({
        type: actions.GET_WEATHER_SUCCESS,
        payload: resp.data,
      })
    }
    else {
      dispatch({
        type: actions.GET_WEATHER_FAILURE,
        error: resp.data.message,
      })
    }
  }
}