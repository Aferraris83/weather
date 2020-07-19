import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import weather from '../redux/weather/reducer';

const reducers = combineReducers({
  weather,
});

const middlewares = [applyMiddleware(thunk)];

const store = createStore(reducers, compose(...middlewares));

export default store;
