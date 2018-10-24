
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

function fetchGetNews(url) {
  return fetch(url)
    .then(response => Promise.resolve(response.json()));
}
