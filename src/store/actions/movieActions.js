
export const movieList = movies => ({
    type: 'GET_MOVIES',
    payload: movies,
});

export function movieListAsync() {
  return (dispatch) => {
    return fetchPosts('http://127.0.0.1:8000/api/movie').then( json => dispatch(movieList(json)) );
  };
}

function fetchPosts(url) {
  return fetch(url)
    .then(response => response.json());
}
