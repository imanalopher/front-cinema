import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getThisMonthMovieListAsync, getComingSoonMovieListAsync } from "../../store/actions/movieActions";

class ComingSoonComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    const { url } = this.props.match;
    console.log('this.props:', this.props);

    if (url !== undefined && this.props.match.url === '/coming-soon') {
      this.props.getNewsComingSoon();
    }
    if (url !== undefined && this.props.match.url === '/') {
      this.props.getNewsThisMonth();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { url } = nextProps.match;
    // console.log('nextProps:', nextProps);
    // console.log('this.props:', this.props);

    if (url !== undefined && this.props.match.url !== undefined && nextProps.match.url !== this.props.match.url) {
      this.props.getNewsThisMonth();
    }

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

  render() {

    const { movies } = this.props;

    return movies.movies.map(movie => <div className="col-4" key={movie.title.toString()}>
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
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getNewsThisMonth() {
    dispatch(getThisMonthMovieListAsync())
  },
  getNewsComingSoon() {
    dispatch(getComingSoonMovieListAsync())
  },
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoonComponent);
