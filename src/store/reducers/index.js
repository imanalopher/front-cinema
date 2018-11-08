import { combineReducers } from 'redux';
import movies from './movieReducers';
import news from './newsReducers';
import newsTypes from './newsTypesReducers';
import people from './peopleReducers';
import redCarpets from './redCarpet';

export default combineReducers({
  movies,
  news,
  newsTypes,
  people,
  redCarpets,
});
