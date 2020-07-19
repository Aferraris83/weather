import { actions } from './actions';

const initialState = {
  weather: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_WEATHER:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
    case actions.GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
