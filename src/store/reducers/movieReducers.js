
const initialState = { movies: [], movieList: { movies: [], count: 0 } };

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return { ...state, movies: action.payload };
    case 'GET_MOVIE_LIST':
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
}
