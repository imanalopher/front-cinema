import { combineReducers } from 'redux';
import movies from './movieReducers';
import news from './newsReducers';
import newsTypes from './newsTypesReducers';
import people from './peopleReducers';
import redCarpets from './redCarpet';
import shows from './showsReducers';
import celebs from './celebsReducers';

export default combineReducers({
  movies,
  news,
  newsTypes,
  people,
  redCarpets,
  shows,
  celebs,
});
