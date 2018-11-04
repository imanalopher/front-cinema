import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeMovieListAsync } from "../../store/actions/movieActions";
import Tab from './../news/Tab';

class MoviesComponent extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.props.getHomeMovies(this.state.activeTabIndex);
  }

  getDirectors = (movie) => {
    return movie.directors.map((director, index, arr)=> {
      let directorFullName = `${director.name + ' ' + director.surname}`;

      if (arr.length === index + 1) {
        return directorFullName;
      }

      return `${directorFullName}, `
    });
  };

  state = { activeTabIndex: 'this-month' };

  changeTab(index) {
    this.props.getHomeMovies(index);
    this.setState({ activeTabIndex: index });
  }

  render() {
    const { hypeNews, movies } = this.props;
    const { activeTabIndex } = this.state;

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
              <Tab active={activeTabIndex === 'this-month'} onClick={this.changeTab.bind(this, 'this-month')}>This Month</Tab>
              <Tab active={activeTabIndex === 'coming-soon'} onClick={this.changeTab.bind(this, 'coming-soon')}>Coming Soon</Tab>
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
              {movies.movies.map(movie => {
                return <div className="col-4" key={movie.title.toString()}>
                  <div className="current-movie-item">
                    <div className="current-movie-pictrailer">
                      <img src={`http://localhost:8000/${movie.image}`} />
                    </div>
                    <div className="current-movie-detail">
                      <div className="current-movie-detail-info">
                        <h1>{movie.title}</h1>
                        <h2>{this.getDirectors(movie)}</h2>
                        <div className="current-movie-detail-stars">
                          {[1,2,3,4,5,6,7,8,9,10].map((rate, key) => <i className={ 'fa fa-star' + (movie.rating < rate ? ' off' : '' )} aria-hidden="true" key={key} />)}
                          <span className="star-number">{movie.rating}/10</span>
                          <span className="star-ratenumber">(5000)</span>
                        </div>
                        <div className="current-movie-detail-genre">
                          <ul>
                            {movie.genre.map((genreName) => <li key={genreName.title}>{genreName.title}</li>)}
                          </ul>
                        </div>
                        <div className="current-movie-detail-minidesc">{movie.miniDescription}</div>
                      </div>
                      <div className="current-movie-detail-trailerlink">
                        <a href="#">Watch Trailer</a>
                      </div>
                    </div>
                    <div className="current-movie-title">
                      <label>{movie.title}
                        <span className="like-it">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </span>
                      </label>
                      <span className="creator">
                        <h2>{this.getDirectors(movie)}</h2>
                      </span>
                    </div>
                  </div>
                </div>
              })}
              {hype}
            </div>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getHomeMovies(slug) {
    dispatch(getHomeMovieListAsync(slug))
  }
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(MoviesComponent);
