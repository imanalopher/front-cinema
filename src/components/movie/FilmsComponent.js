import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import { movieListsAsync } from './../../store/actions/movieActions';

class FilmsComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      activePage: 1
    };
  }

  componentWillMount() {
    this.props.getMovieLists(1);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.getMovieLists(pageNumber);
  }

  render() {

    const { movieList } = this.props;
    const movies = movieList['movies'];
    const movieCount = movieList['count'];

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
            {movies.map(movie => {
              return <div key={movie.id} className="col-6">
                <div className="mlist-item">
                  <div className="image">
                    <img src={`http://localhost:8000/${movie.image}`}/>
                  </div>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-10">
                        <p className="list-title">
                          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                        </p>
                        <div className="info_m">
                          <div className="age_allow pg18">18+</div>
                          <div className="m-duration"><i className="far fa-clock"/><span>170 мин.</span></div>
                          <div className="m-genre">
                            {movie.genre.map(genreItem => {
                              return <a key={genreItem} href="#">{genreItem} | </a>
                            })}
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
                      <p>{movie.miniDescription}</p>
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
          </div>
          <div className="col-lg-6 offset-lg-3 d-flex">
            <Pagination
              activePage={this.state.activePage}
              activeClass={'active_page'}
              itemClass={'page-item'}
              innerClass={'pagination mx-auto justify-content-center'}
              itemsCountPerPage={10}
              totalItemsCount={movieCount}
              pageRangeDisplayed={5}
              linkClass={'page-link'}
              lastPageText={<i className="fas fa-arrow-right"/>}
              firstPageText={<i className="fas fa-arrow-left"/>}
              onChange={this.handlePageChange}
              hideDisabled={true}
              hideFirstLastPages={false}
              hideNavigation={true}
            />
          </div>
        </div>
      </section>
    );
  }
}

FilmsComponent.defaultProps = {
  movies:       [],
  movieCount:   0,
};

FilmsComponent.propTypes = {
  movies:     PropTypes.array,
  movieCount: PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  getMovieLists(page) {
    dispatch(movieListsAsync(page));
  }
});

const mapStateToProps = state => state.movies;

export default connect(mapStateToProps, mapDispatchToProps)(FilmsComponent);
