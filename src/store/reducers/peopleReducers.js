
const initialState = { birthdayPeople: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_BIRTHDAY_PEOPLE':
      return { ...state, birthdayPeople: action.payload };
    default:
      return state;
  }
}
