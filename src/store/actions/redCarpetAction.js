
const redCarpetList = carpets => ({
  type: 'GET_RED_CARPETS',
  payload: carpets,
});

export function redCarpetListAsync() {
  return (dispatch) => {
    return fetchPosts('http://127.0.0.1:8000/api/red-carpets').then( json => dispatch(redCarpetList(json)) );
  };
}

function fetchPosts(url) {
  return fetch(url)
    .then(response => response.json());
}
