import React from 'react';
import { connect } from 'react-redux';
import { movieProfileAsync } from '../../store/actions/movieActions';

class FilmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMovieProfile(this.props.match.params.id);
    this.genreRender = this.genreRender.bind(this);
  }

  componentDidUpdate() {
    this.scrollToTop(200);
  }

  scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2, scrollCount = 0, oldTimestamp = performance.now();

    function step (newTimestamp) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  genreRender(genres) {
    if (genres.length > 0) {
      return genres.map((genre, index) => {
        if (genres.length === index + 1) {
          return (
            <React.Fragment key={genre.genre}>
              <a href="#">{genre.genre}</a>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={genre.genre}>
              <a href="#">{genre.genre}</a><span>|</span>
            </React.Fragment>
          );
        }
      });
    }
  }

  render() {
    const { movie } = this.props;

    return (
      <section className="container main-layout">
        <div className="container_body row">
          <div className="main_profile_container col-3">
            <div className="user_photo">
              <img src={`http://localhost:8000/${movie.image}`} alt=""/>
              <div className="personal_info">
                <p>
                  <span>Director:</span>
                  {movie.directors.map(director => `${director.name}, `)}
                </p>
                <p>
                  <span>Writers:</span>
                  {movie.writers.map(writer => `${writer.name}, `)}
                </p>
                <p><span>Release Date:</span>{movie.releaseDate}</p>
                <p><span>Country:</span>USA</p>
                <p><span>Language:</span>{movie.language}</p>
              </div>
            </div>
            <div className="info_about_film">
              <h1>Company Credits</h1>
              <div className="list_of_info">
                <p><span>Production Co:</span>EuropaCorp, TF1 Films Production , OCS</p>
                <a href="#">See more>></a>
              </div>
            </div>
            <div className="info_about_film">
              <h1>Tecnical Specs</h1>
              <div className="list_of_info">
                <p><span>Sound Mix:</span>DTS(DTS:X)</p>
                <p><span>Color:</span>Color</p>
                <p><span>Aspect Ratio:</span>2.35:1</p>
              </div>
            </div>
            <div className="info_about_film">
              <h1>Box Office</h1>
              <div className="list_of_info">
                <p><span>Budget:</span>$177,200,000</p>
                <p><span>Opening Weekend USA:</span>$53,452,
                  October 18 2013, Limited Release</p>
                <p><span>Gross USA:</span>$41,188,498</p>
              </div>
            </div>
          </div>
          <div className="info_container col-6">
            <div className="user_name">
              <span className="name">{movie.title}</span>
              <div className="user_profession">
                {this.genreRender(movie.genres)}
              </div>
              <div className="user_biography">
                {movie.fullDesc}
              </div>
              <div className="more_info">
                <a href="#">More info at Pro</a>
                <a href="#">Contact Info<span><i className="fas fa-envelope"/></span></a>
                <a href="#">View agent, manager, publicist and legal</a>
              </div>
              <div className="user_gallery">
                <ul className="user_foto">
                  <li>
                    <img src="assets/images/uploads/birthday-2.jpg" alt=""/>
                    <img src="assets/images/uploads/birthday-2.jpg" alt=""/>
                    <img src="assets/images/uploads/birthday-2.jpg" alt=""/>
                  </li>
                </ul>
                <ul className="user_video">
                  <li>
                    <img src="assets/images/uploads/birthday-3.jpg" alt=""/>
                    <img src="assets/images/uploads/birthday-3.jpg" alt=""/>
                    <img src="assets/images/uploads/birthday-3.jpg" alt=""/>
                  </li>
                </ul>
              </div>
              <div className="user_nomination">
                <div className="nominations">
                  <div className="border_nominations">
                    <img src="assets/images/system-images/pic_form.png" alt=""/>
                  </div>
                  <div className="prizes">
                    <p><span>10</span> wins & <span>38</span> nominations</p>
                    <a href="#">See more awards</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="filmography table-responsive">
              <div className="filmography_head">
                <p>Cast</p>
                <select>
                  <option value="">Filter</option>
                  <option value="">rrr</option>
                  <option value="">ewe</option>
                </select>
              </div>

              <table className="table film_cast" border="1">
                <tbody>
                {movie.cast.map(cast => {
                  return <tr key={cast.id}>
                    <td><img src={`http://localhost:8000/${cast.peopleImage}`} alt=""/></td>
                    <td>{cast.peopleName}</td>
                    <td>{cast.occupation}</td>
                  </tr>;
                })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="related_container col-3">
            <div className="related_container_body">
              <span>The latest news</span>
              <div className="table_news">
                <div className="fresh_news">
                  <img src="assets/images/uploads/movie_gallery2.png" alt=""/>
                  <div className="news_title">
                    <p>Beyonce's 10th Grammy</p>
                    <span><i className="far fa-clock"/>1 hour ago</span>
                  </div>
                </div>
              </div>
              <div className="table_news">
                <div className="fresh_news">
                  <img src="assets/images/uploads/movie_gallery4.jpg" alt=""/>
                  <div className="column news_title">
                    <p>Beyonce's 10th Grammy</p>
                    <span><i className="far fa-clock"/>1 hour ago</span>
                  </div>
                </div>
              </div>
              <div className="table_news">
                <div className="fresh_news">
                  <img src="assets/images/uploads/movie_gallery5.jpg" alt=""/>
                  <div className="column news_title">
                    <p>Beyonce's 10th Grammy</p>
                    <span><i className="far fa-clock"/>1 hour ago</span>
                  </div>
                </div>
              </div>
              <div className="table_news">
                <div className="fresh_news">
                  <img src="assets/images/uploads/movie_gallery3.jpg" alt=""/>
                  <div className="column news_title">
                    <p>Beyonce's 10th Grammy</p>
                    <span><i className="far fa-clock"/>1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="related_videos">
              <span>Related Videos</span>
              <div className="users_video">
                <img src="assets/images/uploads/movie_gallery3.jpg"/>
                <label>
                  <p>Shikioriori The Movie Official Trailer #1 (2018)</p>
                </label>
              </div>
              <div className="users_video">
                <img src="assets/images/uploads/movie_gallery2.png"/>
                <label>
                  <p>Shikioriori The Movie Official Trailer #1 (2018)</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  getMovieProfile(movieId) {
    dispatch(movieProfileAsync(movieId));
  }
});

const mapStateToProps = state => state.movies;

export default connect(mapStateToProps, mapDispatchToProps)(FilmComponent);
