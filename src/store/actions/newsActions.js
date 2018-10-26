
export const newsList = news => ({
    type: 'GET_NEWS',
    payload: news,
});

export const newsListBySlug = news => ({
    type: 'GET_NEWS_BY_SLUG',
    payload: news,
});

export const clearNewsListBySlug = () => ({
    type: 'CLEAR_NEWS_BY_SLUG',
    payload: [],
});

export const hypeNews = news => ({
    type: 'HYPE_NEWS',
    payload: news,
});

export const spotlightNews = news => ({
    type: 'GET_SPOTLIGHT_NEWS',
    payload: news,
});

export function newsListAsync() {
  return (dispatch) => {
    return fetchGetNews('http://127.0.0.1:8000/api/news').then( json => dispatch(newsList(json)) );
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
    .then(response => Promise.resolve(response.json()));
}
