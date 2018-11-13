
const initialState = {
  newsList: {
      news: [],
      count: 0,
  },
  newsBySlug: [],
  hypeNews: [],
  spotlightNews: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, newsList: action.payload };
    case 'GET_NEWS_BY_SLUG':
      return { ...state, newsBySlug: action.payload };
    case 'CLEAR_NEWS_BY_SLUG':
      return [];
    case 'HYPE_NEWS':
      return { ...state, hypeNews: action.payload };
    case 'GET_SPOTLIGHT_NEWS':
      return { ...state, spotlightNews: action.payload };
    default:
      return state;
  }
}
