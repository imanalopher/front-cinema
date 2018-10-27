
export const birthdayPeopleList = movies => ({
  type: 'GET_BIRTHDAY_PEOPLE',
  payload: movies,
});

export function birthdayPeopleListAsync() {
  return (dispatch) => {
    return fetchPeople('http://127.0.0.1:8000/api/people/birthday').then( json => dispatch(birthdayPeopleList(json)) );
  };
}

function fetchPeople(url) {
  return fetch(url).then(response => response.json());
}
