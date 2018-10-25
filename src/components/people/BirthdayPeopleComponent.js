import React, { Component } from 'react';

class BirthdayPeopleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { birthdayPeople } = this.props;

    return (
      <div className="main-container">
        <div className="main-page-birthdays">
          <div className="main-birthday-title">
            <label>
              Born Today
              <span>{(new Date()).getDate()} day of {(new Date()).getMonth()+1}</span>
            </label>
            <a href="#">See All</a>
          </div>
          <div className="main-birthday-list">
            <ul>
              {birthdayPeople.map(people => {
                return (
                  <li key={people.id}>
                    <label>
                      <a href="#">{people.name} {people.surname}</a>
                      <span className="birthday-occup">{people.occupations.join(', ')}</span>
                      <span className="birthday-cake">
                        <i className="fas fa-birthday-cake" /> He is turned {(new Date()).getFullYear() - people.year} today.
                      </span>
                    </label>
                    <img src="http://127.0.0.1/back/images/gallery/imgbox5.jpg"/>
                    <span className="turned-in">Turned in {(new Date()).getFullYear() - people.year}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdayPeopleComponent;
