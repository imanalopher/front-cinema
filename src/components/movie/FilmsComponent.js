import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieListsAsync } from './../../store/actions/movieActions';

class FilmsComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMovieLists();
  }

  render() {

    const { movieList } = this.props;

    return (
      <section className="main-layout">
        <div className="container main-container">
          <div className="m-list-header">
            <label className="main_title">Все фильмы</label>
            <div className="mlist-sort">
              <select className="select_m">
                <option className="select_title" value="">LAST WEEK</option>
                <option>2</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <div className="row">
            {movieList.map(movie => {
              return <div className="col-6">
                <div className="mlist-item">
                  <div className="image">
                    <img src={`http://localhost:8000/${movie.image}`}/>
                  </div>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-10">
                        <p className="list-title"><a href="#">{movie.title}</a></p>
                        <div className="info_m">
                          <div className="age_allow pg18">18+</div>
                          <div className="m-duration"><i className="far fa-clock"/><span>170 мин.</span></div>
                          <div className="m-genre">
                            <a href="#">Action |</a>
                            <a href="#">Fantasy |</a>
                            <a href="#">Comedy</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="m-rate">
                          <i className="fa fa-star starr"/><span>4.9</span>
                        </div>
                        <div className="m-stats stat-down">
                          <img className="stats-arrow" src="assets/images/system-images/stat_arrow.png"/>
                          <span>1000</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p>
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt, explicabo.
                      </p>
                    </div>
                    <div className="directors">
                      <p>Director: <a href="#">Mike</a></p>
                      <p>Actors: <a href="#">Lucy</a></p>
                    </div>
                    <div className="but_gr">
                      <button className="button_t">СМОТРЕТЬ ТРЕЙЛЕР</button>
                    </div>
                  </div>
                </div>
              </div>
            })}
            <div className="col-6">
              <div className="mlist-item">
                <div className="image">
                  <img src="http://localhost:8000/uploads/movie/2/79f43195dda94c9348b55fe50b8fadae.jpeg"/>
                </div>
                <div className="review">
                  <div className="row no-gutters">
                    <div className="col-10">
                      <p className="list-title"><a href="#">Death Wish (2018)</a></p>
                      <div className="info_m">
                        <div className="age_allow pg18">18+</div>
                        <div className="m-duration"><i className="far fa-clock"/><span>170 мин.</span></div>
                        <div className="m-genre">
                          <a href="#">Action |</a>
                          <a href="#">Fantasy |</a>
                          <a href="#">Comedy</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="m-rate">
                        <i className="fa fa-star starr"/><span>4.9</span>
                      </div>
                      <div className="m-stats stat-down">
                        <img className="stats-arrow" src="assets/images/system-images/stat_arrow.png"/>
                        <span>1000</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt, explicabo.
                    </p>
                  </div>
                  <div className="directors">
                    <p>Director: <a href="#">Mike</a></p>
                    <p>Actors: <a href="#">Lucy</a></p>
                  </div>
                  <div className="but_gr">
                    <button className="button_t">СМОТРЕТЬ ТРЕЙЛЕР</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mlist-item">
                <div className="image">
                  <img src="http://localhost:8000//uploads/movie/2/79f43195dda94c9348b55fe50b8fadae.jpeg" />
                </div>
                <div className="review">
                  <div className="row no-gutters">
                    <div className="col-10">
                      <p className="list-title"><a href="#">Death Wish (2018)</a></p>
                      <div className="info_m">
                        <div className="age_allow pg10">10+</div>
                        <div className="m-duration"><i className="far fa-clock"/><span>170 мин.</span></div>
                        <div className="m-genre">
                          <a href="#">Action |</a>
                          <a href="#">Fantasy |</a>
                          <a href="#">Comedy</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="m-rate">
                        <i className="fa fa-star starr"/><span>4.9</span>
                      </div>
                      <div className="m-stats stat-up">
                        <img className="stats-arrow" src="assets/images/system-images/stat_arrow.png"/>
                          1000
                      </div>
                    </div>
                  </div>

                  <div>
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt, explicabo.
                    </p>
                  </div>
                  <div className="directors">
                    <p>Director: Mike</p>
                    <p>Actors: Lucy</p>
                  </div>
                  <div className="but_gr">
                    <button className="button_t">СМОТРЕТЬ ТРЕЙЛЕР</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination row">
            <div className="page_number active_page"><a href="#">1</a></div>
            <div className="page_number"><a href="#">2</a></div>
            <div className="page_number"><a href="#">3</a></div>
            <div className="page_number"><a href="#">4</a></div>
            <div className="page_number"><a href="#">..</a></div>
            <div className="page_number"><a href="#">65</a></div>
            <div className="page_number"><a href="#"><i className="fas fa-arrow-right"></i></a></div>

          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMovieLists() {
    dispatch(movieListsAsync());
  }
});

const mapStateToProps = state => state.movies;

export default connect(mapStateToProps, mapDispatchToProps)(FilmsComponent);
