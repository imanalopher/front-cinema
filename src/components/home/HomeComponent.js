import React, { Component } from 'react';
import MoviesComponent from './../movie/MoviesComponent';
import NewsComponent from '../news/NewsComponent';
import { connect } from 'react-redux';
import { movieListAsync } from './../../store/actions/movieActions';
import { newsTypesListAsync } from './../../store/actions/newsTypeAction';
import { hypeNewsAsync, spotlightNewsAsync } from './../../store/actions/newsActions';
import { birthdayPeopleListAsync } from './../../store/actions/peopleActions';
import BirthdayPeopleComponent from '../people/BirthdayPeopleComponent';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMovies();
    this.props.getNewsTypes();
    this.props.getBirthdayPeople();
    this.props.getHypeNews();
    this.props.getSpotlightNews();
  }

  render() {

    const { movies, newsTypes, people, news } = this.props;

    return (
      <React.Fragment>
        <section className="container main-layout">
          <div className="main-page">
            <div className="row no-gutters">
              <div className="col-8">
                <MoviesComponent movies={movies} hypeNews={news.hypeNews} />
                <BirthdayPeopleComponent birthdayPeople={people.birthdayPeople} spotlightNews={news.spotlightNews}/>
              </div>
              <div className="col-4">
                <NewsComponent newsTypes={newsTypes}/>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMovies() {
    dispatch(movieListAsync())
  },
  getNewsTypes() {
    dispatch(newsTypesListAsync())
  },
  getBirthdayPeople() {
    dispatch(birthdayPeopleListAsync())
  },
  getHypeNews() {
    dispatch(hypeNewsAsync())
  },
  getSpotlightNews() {
    dispatch(spotlightNewsAsync())
  }
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
