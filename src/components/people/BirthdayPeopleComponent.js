import React, { Component } from 'react';

class BirthdayPeopleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { birthdayPeople, spotlightNews } = this.props;

    let spotlight = '';
    if (typeof(spotlightNews) === 'object') {
      spotlight = <React.Fragment>
        <div className="editors-spot">
          <label>Editor's Spotlight</label>
          <div className="row">
            <div className="col-6">
              <div className="editors-news">
                <h1>{spotlightNews.title}</h1>
                <span className="posted-by">Posted by: Aichurek Aichurekovna</span>
                <p>{spotlightNews.description}</p>
                <div className="editors-bottom">
                  <a href="#">Continue Reading..</a>
                  <span className="editors-time"><i className="far fa-clock"/>1 hour ago</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img src={`http://127.0.0.1/${spotlightNews.image}`} />
            </div>
          </div>
        </div>
      </React.Fragment>
    }

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
                    <img src={`http://127.0.0.1/${people.image}`}/>
                    <span className="turned-in">Turned in {(new Date()).getFullYear() - people.year}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          {spotlight}
        </div>
      </div>
    );
  }
}

export default BirthdayPeopleComponent;
