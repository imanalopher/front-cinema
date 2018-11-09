import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getShowAsync } from "../../store/actions/showsAction";

class ShowComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getShowAsync(this.props.match.params.id);
  }

  render() {
    const { show } = this.props;
    console.log('this.props:', this.props);

    return (
      <React.Fragment>
        <section className="container main-layout">
          <div className="container_body row">
            <div className="main_profile_container col-3">
              <div className="user_photo">
                <img src={`http://localhost:8000${show.image}`} alt=""/>
                <div className="personal_info">
                  <p>
                    <span>Director:</span>
                    {show.directors.map(director => <a href="#" key={director.id}> {director.name},</a>)}
                  </p>
                  <p>
                    <span>Writers:</span>
                    {show.writers.map(writer => <a href="#" key={writer.id}> {writer.name},</a>)}
                  </p>
                  <p>
                    <span>Release Date:</span>
                    <a href="#">{new Date(show.releaseDate).toLocaleDateString()}</a>
                  </p>
                  <p><span>Country:</span><a href="#">USA</a></p>
                  <p><span>Language:</span><a href="">English</a></p>
                </div>
              </div>
              <div className="info_about_film">
                <h1>Company Credits</h1>
                <div className="list_of_info">
                  <p><span>Production Co:</span> EuropaCorp, TF1 Films Production , OCS</p>
                  <a href="#">See more>></a>
                </div>
              </div>
              <div className="info_about_film">
                <h1>Tecnical Specs</h1>
                <div className="list_of_info">
                  <p><span>Sound Mix:</span> DTS(DTS:X)</p>
                  <p><span>Color:</span> Color</p>
                  <p><span>Aspect Ratio:</span> 2.35:1</p>
                </div>
              </div>
              <div className="info_about_film">
                <h1>Box Office</h1>
                <div className="list_of_info">
                  <p><span>Budget:</span> $177,200,000</p>
                  <p><span>Opening Weekend USA:</span> $53,452,
                    October 18 2013, Limited Release</p>
                  <p><span>Gross USA:</span> $41,188,498</p>
                </div>
              </div>
            </div>
            <div className="info_container col-6">
              <div className="user_name">
                <span className="name">{show.title}</span>
                <div className="user_profession">
                  {show.genres.map(genre => <Fragment key={genre.id}><a href="#">{genre.title}</a><span>|</span></Fragment>)}
                </div>
                <div className="user_biography">{show.miniDescription}</div>
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
                    <img src="/images/uploads/gallery-5.png" alt=""/>
                    <img src="/images/uploads/gallery-5.png" alt=""/>
                    <img src="/images/uploads/gallery-5.png" alt=""/>
                    <img src="/images/uploads/movie_gallery2.png" alt=""/>
                    <img src="/images/uploads/movie_gallery2.png" alt=""/>
                    <img src="/images/uploads/movie_gallery2.png" alt=""/>
                  </div>
                </div>
                <div className="user_nomination">
                  <div className="nominations">
                    <div className="border_nominations">
                      <img src="images/system-images/pic_form.png" alt=""/>
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
                  <p>Cast</p>
                  <select>
                    <option value="">Filter</option>
                    <option value="">rrr</option>
                    <option value="">ewe</option>
                  </select>
                </div>
                <table className="table table_img">
                  <tbody>
                  <tr>
                    <td><img src="/images/uploads/movie_gallery5.jpg" alt=""/></td>
                    <td><a href="">Sed ut perspiciatis unde omnis</a></td>
                    <td>John Joseph</td>
                  </tr>
                  <tr>
                    <td><img src="/images/uploads/movie_gallery3.jpg" alt=""/></td>
                    <td><a href="">Valerian and the City </a></td>
                    <td>Major Valerian</td>
                  </tr>
                  <tr>
                    <td><img src="/images/uploads/movie_gallery4.jpg" alt=""/></td>
                    <td><a href="">Two Lovers and a Bear</a></td>
                    <td>Chris Morgan</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="related_container col-3">
              <div className="related_container_body">
                <span>Episodes</span>

                {show.seasons.map(season => {
                  return <div className="table_news" key={season.id}>
                    <div className="fresh_news">
                      <img src={`http://localhost:8000${show.image}`} alt=""/>
                      <div className="news_title">
                        <p><a href="#">{season.name}</a></p>
                        <ul>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">..</a></li>
                          <li><a href="#">10</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                })}

                <ul className="pagination mx-auto justify-content-center border_serials">
                  <li className="page-item page_number">
                    <a className="page-link" href="#"><i className="fas fa-angle-left"/></a>
                  </li>
                  <li className="page-item page_number  active_page">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item page_number">
                    <a className="page-link" href="#">..</a>
                  </li>
                  <li className="page-item page_number">
                    <a className="page-link  active_page" href="#">12</a>
                  </li>
                  <li className="page-item page_number">
                    <a className="page-link" href="#"><i className="fas fa-angle-right"/></a>
                  </li>
                </ul>
              </div>
              <div className="related_videos">
                <span>Related Videos</span>
                <div className="users_video">
                  <img src="/images/uploads/movie_gallery3.jpg"/>
                  <label>
                    <p><a href="#">Shikioriori The Movie Official Trailer #1 (2018)</a></p>
                  </label>
                </div>
                <div className="users_video">
                  <img src="/images/uploads/movie_gallery2.png"/>
                  <label>
                    <p><a href="#">Shikioriori The Movie Official Trailer #1 (2018)</a></p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getShowAsync(id) {
    dispatch(getShowAsync(id))
  },
});

const mapStateToProps = state => state.shows;

export default connect(mapStateToProps, mapDispatchToProps)(ShowComponent);
