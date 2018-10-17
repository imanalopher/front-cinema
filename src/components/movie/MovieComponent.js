import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { movie } = this.props;
    const directors = movie.directors.map((director, index, arr)=> {
      let directorFullName = `${director.name + ' ' + director.surname}`;

      if (arr.length === index + 1) {
        return directorFullName;
      }

      return `${directorFullName}, `
    });

    return (
      <div className="col-4" key={movie.title.toString()}>
        <div className="current-movie-item">
          <div className="current-movie-pictrailer">
            <img src={`http://localhost:8000/${movie.image}`} />
          </div>
          <div className="current-movie-detail">
            <div className="current-movie-detail-info">
              <h1>{movie.title}</h1>
              <h2>{directors}</h2>
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
              {directors}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

MovieComponent.defaultProps = {
  movie: {
    title:           PropTypes.string.isRequired,
    miniDescription: PropTypes.string.isRequired,
    surname:         PropTypes.string.isRequired,
    rating:          PropTypes.number.isRequired,
    image:           PropTypes.string.isRequired,
    genre:           PropTypes.array.isRequired,
    directors:       PropTypes.array.isRequired,
  }
};

MovieComponent.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieComponent;
