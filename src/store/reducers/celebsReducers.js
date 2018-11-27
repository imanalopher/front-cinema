
const initialState = {
  celebsList: { people: [], count: 0 },
  celebProfile: {
    people: {
      id: 0,
      name: "",
      surname: "",
      starMeter: 0,
      birthday: null,
      dateDie: "",
      birthPlace: "",
      birthName: "",
      height: 0,
      bio: "",
      spouse: "",
      sex: false,
      occupations: [],
      occupation: "",
      movies: []
    },
    news: [],
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_CELEBS_LIST':
      return { ...state, celebsList: action.payload };
    case 'GET_CELEB_PROFILE':
      return { ...state, celebProfile: action.payload };
    default:
      return state;
  }
}
