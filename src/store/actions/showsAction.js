
const setShows = shows => ({
  type: 'GET_SHOWS_LIST',
  payload: shows,
});

const setShow = show => ({
  type: 'GET_SHOW',
  payload: show,
});

export function getShowsAsync(page) {
  return (dispatch) => {
    return fetchPosts(`http://127.0.0.1:8000/api/shows?page=${page}`).then( json => dispatch(setShows(json)) );
  };
}

export function getShowAsync(id) {
  return (dispatch) => {
    return fetchPosts(`http://127.0.0.1:8000/api/shows/${id}`).then( json => dispatch(setShow(json)) );
  };
}

function fetchPosts(url) {
  return fetch(url)
    .then(response => response.json());
}
