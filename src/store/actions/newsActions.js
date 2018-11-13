
const newsProfile = news => ({
    type: 'GET_NEWS_PROFILE',
    payload: news,
});

const newsList = news => ({
    type: 'GET_NEWS_LIST',
    payload: news,
});

const newsListBySlug = news => ({
    type: 'GET_NEWS_BY_SLUG',
    payload: news,
});

const clearNewsListBySlug = () => ({
    type: 'CLEAR_NEWS_BY_SLUG',
    payload: [],
});

const hypeNews = news => ({
    type: 'HYPE_NEWS',
    payload: news,
});

const spotlightNews = news => ({
    type: 'GET_SPOTLIGHT_NEWS',
    payload: news,
});

export function newsListAsync(page) {
  return (dispatch) => {
    return fetchGetNews(`http://127.0.0.1:8000/api/news?page=${page}`).then( json => dispatch(newsList(json)) );
  };
}

export function newsProfileAsync(slug) {
  return (dispatch) => {
    return fetchGetNews(`http://127.0.0.1:8000/api/news/${slug}`).then( json => dispatch(newsProfile(json)) );
  };
}

export function newsListBySlugAsync(slug) {
  return (dispatch) => {
    return fetchGetNews(`http://127.0.0.1:8000/api/news/${slug}`).then(json => dispatch(newsListBySlug(json)));
  };
}

export function hypeNewsAsync() {
  return (dispatch) => {
    return fetchGetNews(`http://127.0.0.1:8000/api/news/hype`).then(json => dispatch(hypeNews(json)));
  };
}

export function spotlightNewsAsync() {
  return (dispatch) => {
    return fetchGetNews(`http://127.0.0.1:8000/api/news/spotlight`).then(json => dispatch(spotlightNews(json)));
  };
}

function fetchGetNews(url) {
  return fetch(url)
    .then(response => response.json());
}
