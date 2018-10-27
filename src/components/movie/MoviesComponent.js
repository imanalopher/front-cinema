import React, { Component } from 'react';
import MovieComponent from './MovieComponent';
import { NavLink } from 'react-router-dom';

class MoviesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies, hypeNews } = this.props;

    let hype = '';
    if (typeof(hypeNews) === 'object') {
      hype = <React.Fragment>
        <span className="spacer"/>
        <div className="col-12">
          <div className="editors-spot">
            <label>Casting for "Hype of Manas"</label>
            <div className="row">
              <div className="col-6">
                <img src={`http://127.0.0.1/${hypeNews.image}`} />
              </div>
              <div className="col-6">
                <div className="editors-news">
                  <h1>{hypeNews.title}</h1>
                  <span className="posted-by">Posted by: Aichurek Aichurekovna</span>
                  <p>{hypeNews.description}</p>
                  <div className="editors-bottom">
                    <a href="#">Continue Reading..</a>
                    <span className="editors-time"><i className="far fa-clock"/>1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    }

    return (
      <div className="main-container">
        <div className="current-movies">
          <div className="current-movies-head">
            <ul className="current-movies-nav">
              <li><a className="active" href="#">This Month</a></li>
              <li><NavLink to="/coming-soon">Coming Soon</NavLink></li>
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
            <MovieComponent movies={movies.movies} />
            {hype}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesComponent;
