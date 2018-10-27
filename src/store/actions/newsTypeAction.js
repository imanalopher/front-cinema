
export const newsTypesList = newsTypes => ({
  type: 'GET_NEWS_TYPES',
  payload: newsTypes,
});

export function newsTypesListAsync() {
  return (dispatch) => {
    return fetchGetNews('http://127.0.0.1:8000/api/news-types')
      .then( json => dispatch(newsTypesList(json)) );
  };
}

function fetchGetNews(url) {
  return fetch(url)
    .then(response => response.json());
}
