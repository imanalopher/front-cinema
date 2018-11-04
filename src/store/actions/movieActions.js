
export const movieList = movies => ({
    type: 'GET_MOVIES',
    payload: movies,
});

export const movieLists = movies => ({
    type: 'GET_MOVIE_LIST',
    payload: movies,
});

export function movieListAsync() {
  return (dispatch) => {
    return fetchPosts('http://127.0.0.1:8000/api/movie').then( json => dispatch(movieList(json)) );
  };
}

export function movieListsAsync() {
  return (dispatch) => {
    return fetchPosts('http://127.0.0.1:8000/api/movie/list-movies').then( json => dispatch(movieLists(json)) );
  };
}

export function getHomeMovieListAsync(slug) {
  return (dispatch) => {
    return fetchPosts(`http://127.0.0.1:8000/api/movie/${slug}`).then( json => dispatch(movieList(json)) );
  };
}

function fetchPosts(url) {
  return fetch(url)
    .then(response => response.json());
}
