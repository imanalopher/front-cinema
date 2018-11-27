
const celebsList = celebs => ({
  type: 'GET_CELEBS_LIST',
  payload: celebs,
});

const celebsProfile = celeb => ({
  type: 'GET_CELEB_PROFILE',
  payload: celeb,
});

export function getCelebsListAsync(page) {
  return (dispatch) => fetchPosts(`http://127.0.0.1:8000/api/people?page=${page}`).then(json => dispatch(celebsList(json)));
}

export function getCelebsProfileAsync(page) {
  return (dispatch) => fetchPosts(`http://127.0.0.1:8000/api/people/${page}`).then(json => dispatch(celebsProfile(json)));
}

const fetchPosts = (url) => fetch(url).then(response => response.json());
