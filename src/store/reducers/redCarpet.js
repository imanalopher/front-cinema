
const initialState = {
  carpets: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_RED_CARPETS':
      return { ...state, carpets: action.payload };
    default:
      return state;
  }
}
