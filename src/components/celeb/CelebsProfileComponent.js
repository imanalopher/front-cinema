import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCelebsProfileAsync } from "../../store/actions/celebsActions";

class CelebsProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getCelebsProfileAsync(this.props.match.params.id);
  }

  render() {
    const { celebProfile } = this.props;

    return (
      <section className="container main-layout">
        <div className="container_body  row">
          <div className="main_profile_container col-3">
            <div className="user_photo">
              <img src={`http://localhost:8000${celebProfile.people.image}`} alt=""/>
              <div className="personal_info">
                <p><span>Nickname:</span>Nickname</p>
                <p>
                  <span>Date of Birth:</span>
                  {new Intl.DateTimeFormat('ru-RU').format(new Date(celebProfile.people.birthday))}
                </p>
                <p>
                  <span>Age:</span>
                  {new Date().getFullYear() - new Date(celebProfile.people.birthday).getFullYear()}
                </p>
                <p>
                  <span>Height:</span>
                  {celebProfile.people.height}
                </p>
                <p>
                  <span>Social Links:</span>
                  <a href=""><i className="fab fa-facebook-f"/></a>
                  <a href=""><i className="fab fa-twitter"/></a>
                  <a href=""><i className="fab fa-instagram"/></a>
                </p>
              </div>
            </div>
            <div className="user_information">
              <span>Known for</span>
              <div className="user_m">
                <div className="movie_info">
                  <div>
                    <img src="assets/images/uploads/movie_gallery5.jpg" alt=""/>
                  </div>
                  <div>
                    <p><a href="#">Мстители jsfhseilufue</a></p>
                    <p><span>Role:Zack</span></p>
                  </div>
                </div>
                <div className="movie_info">
                  <div>
                    <img src="assets/images/uploads/movie_gallery4.jpg" alt=""/>
                  </div>
                  <div>
                    <p><a href="#">Мстители jsfhseilufue</a></p>
                    <p><span>Role:Zack</span></p>
                  </div>
                </div>
                <div className="movie_info">
                  <div>
                    <img src="assets/images/uploads/movie-poster-1.jpg" alt=""/>
                  </div>
                  <div>
                    <p><a href="#">Мстители jsfhseilufue</a></p>
                    <p><span>Role:Zack</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info_container col-6">
            <div className="user_name">
              <span className="name">{celebProfile.people.name + ' ' + celebProfile.people.surname}</span>
              <div className="user_profession">
                {celebProfile.people.occupations.map(occupation => {
                  return <React.Fragment key={occupation.id}>
                    <a href="#">{occupation.name}</a><span>|</span>
                  </React.Fragment>
                })}
              </div>
              <div className="user_biography">
                <p>
                  {celebProfile.people.bio}
                </p>
              </div>
              <div className="more_info">
                <a href="#">More info at Pro</a>
                <a href="#">Contact Info<span><i className="fas fa-envelope"/></span></a>
                <a href="#">View agent, manager, publicist and legal</a>
              </div>
              <ul className="nav nav-tabs nav-justified foto_video_btns">
                <li className="nav-item">
                  <a className="nav-link" href="#">25 foto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">11 video</a>
                </li>
              </ul>
              <div className="user_gallery">
                <div className="foto">
                  <img src="assets/images/uploads/gallery-5.png" alt=""/>
                  <img src="assets/images/uploads/gallery-5.png" alt=""/>
                  <img src="assets/images/uploads/gallery-5.png" alt=""/>
                  <img src="assets/images/uploads/movie_gallery2.png" alt=""/>
                  <img src="assets/images/uploads/movie_gallery2.png" alt=""/>
                  <img src="assets/images/uploads/movie_gallery2.png" alt=""/>
                </div>
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
            <div className="filmography">
              <div className="filmography_head">
                <p>Film library</p>
                <select>
                  <option value="">Filter</option>
                  <option value="">rrr</option>
                  <option value="">ewe</option>
                </select>
              </div>
              <table className="table table_film">
                <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Film</th>
                  <th scope="col">Rating</th>
                </tr>
                </thead>
                <tbody>
                  {celebProfile.people.movies.map(movie => {
                    return <tr key={movie.id}>
                      <td>{new Date(movie.releaseDate).getFullYear()}</td>
                      <td><Link to={`/movie/${movie.id}`}>{movie.title}</Link></td>
                      <td>{movie.movieMeter}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="related_container col-3">
            <div className="related_container_body">
              <span>The latest news</span>
              {celebProfile.news.map(news => {
                return <div className="table_news" key={news.id}>
                  <div className="fresh_news">
                    <img src={`http://localhost:8000${news.image}`} alt=""/>
                    <div className="news_title">
                      <Link to={`/news/${news.slug}`}>{news.title}</Link>
                      <span className="news_time">
                        <i className="far fa-clock"/>
                        {new Date(news.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              })}
            </div>
            <div className="related_videos">
              <span>Related Videos</span>
              <div className="users_video">
                <img src="assets/images/uploads/movie_gallery3.jpg"/>
                  <label>
                    <p><a href="#">Shikioriori The Movie Official Trailer #1 (2018)</a></p>
                  </label>
              </div>
              <div className="users_video">
                <img src="assets/images/uploads/movie_gallery2.png"/>
                <label>
                  <p><a href="#">Shikioriori The Movie Official Trailer #1 (2018)</a></p>
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
  getCelebsProfileAsync(page) {
    dispatch(getCelebsProfileAsync(page))
  }
});

const mapStateToProps = state => state.celebs;

export default connect(mapStateToProps, mapDispatchToProps)(CelebsProfileComponent);
