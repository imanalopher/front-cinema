
const initialState = {
  shows: {
    shows: [],
    count: 0,
  },
  show: {
    genres:    [],
    seasons:   [],
    directors: [],
    writers:   [],
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_SHOWS_LIST':
      return { ...state, shows: action.payload };
    case 'GET_SHOW':
      return { ...state, show: action.payload };
    default:
      return state;
  }
}
