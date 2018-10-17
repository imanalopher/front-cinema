import React, { Component } from 'react';
import MovieComponent from './MovieComponent';

class MoviesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="main-container">
        <div className="current-movies">
          <div className="current-movies-head">
            <ul className="current-movies-nav">
              <li><a className="active" href="#">This Month</a></li>
              <li><a href="#">Coming Soon</a></li>
              <li><a href="#">Box Office</a></li>
            </ul>
            <ul className="current-movies-filter">
              <li>
                <a className="active" href="#">
                  <i className="fa fa-th-large" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-bars" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
          <div className="row current-movies-content">
            { movies.movies.map((movie) => <MovieComponent movie={movie}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesComponent;
