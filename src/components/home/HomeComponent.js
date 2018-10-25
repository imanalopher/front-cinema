import React, { Component } from 'react';
import HeaderComponent from './../HeaderComponent';
import MoviesComponent from './../movie/MoviesComponent';
import NewsComponent from '../news/NewsComponent';
import { connect } from 'react-redux';
import { movieListAsync } from './../../store/actions/movieActions';
import { newsTypesListAsync } from './../../store/actions/newsTypeAction';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMovies();
    this.props.getNewsTypes();
  }

  render() {

    const { movies, newsTypes } = this.props;

    return (
      <React.Fragment>
        <section className="container main-layout">
          <div className="main-page">
            <div className="row no-gutters">
              <div className="col-8">
                <MoviesComponent movies={movies}/>
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
  }
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
