
export const movieList = movies => ({
    type: 'GET_MOVIES',
    payload: movies,
});

export function movieListAsync() {
  return (dispatch) => {
    return fetchPosts().then( json => dispatch(movieList(json)) );
  };
}

function fetchPosts() {
  return fetch('http://127.0.0.1:8000/api/movie')
    .then(response => Promise.resolve(response.json()));
}
