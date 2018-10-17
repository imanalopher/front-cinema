import React, { Component } from 'react';
import HeaderComponent from './../HeaderComponent';
import MoviesComponent from './../movie/MoviesComponent';
import MainMenu from './../MainMenu';
import { connect } from 'react-redux';
import { movieListAsync } from './../../store/actions/movieActions';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMovies();
  }

  render() {

    const { movies } = this.props;

    return (
      <React.Fragment>
        <HeaderComponent />
        <MainMenu />
        <section className="container main-layout">
          <div className="main-page">
            <div className="row no-gutters">
              <div className="col-8">
                <MoviesComponent movies={movies}/>
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
  }
});
const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
