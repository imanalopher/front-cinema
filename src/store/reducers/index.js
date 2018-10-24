import { combineReducers } from 'redux';
import movies from './movieReducers';
import news from './newsReducers';
import newsTypes from './newsTypesReducers';

export default combineReducers({
  movies,
  news,
  newsTypes,
});
