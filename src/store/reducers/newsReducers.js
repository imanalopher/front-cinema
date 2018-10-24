
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_NEWS':
      return action.payload;
    case 'GET_NEWS_BY_SLUG':
      return action.payload;
    case 'CLEAR_NEWS_BY_SLUG':
      return [];
    default:
      return state;
  }
}
