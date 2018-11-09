import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShowsAsync } from '../../store/actions/showsAction';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";

class ShowsComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      activePage: 1
    };
  }

  componentWillMount() {
    this.props.getShowsAsync(1);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.getShowsAsync(pageNumber);
  }

  render() {
    const { shows } = this.props;
    const showsList = shows.shows;
    const showsCount = shows.count;

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
            {showsList.map(show => {
              return <div key={show.id} className="col-6">
                <div className="mlist-item">
                  <div className="image">
                    <img src={`http://localhost:8000${show.image}`}/>
                  </div>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-10">
                        <p className="list-title">
                          <Link to={`/shows/${show.id}`}>{show.title}</Link>
                        </p>
                        <div className="info_m">
                          <div className="age_allow pg18">18+</div>
                          <div className="m-duration">42minutes</div>
                          <div className="seasons">
                            <a href="#">Сезон 1&#215;12&nbsp;|</a>
                            <a href="#">02&#215;12&nbsp;|</a>
                            <a href="#">03&#215;12&nbsp;|</a>
                            <a href="#">04&#215;12</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="m-rate">
                          <i className="fa fa-star starr"/><span>4.9</span>
                        </div>
                        <div className="m-stats stat-down">
                          <img className="stats-arrow" src="images/system-images/chart_icon.png"/>
                          <span>1000</span>
                        </div>
                      </div>
                    </div>

                    <div>{show.miniDescription}</div>
                    <div className="directors">
                      <p>Director: {show.directors.map(director => <a href="#" key={director.id}>{director.name},&nbsp;</a>)}</p>
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
              totalItemsCount={showsCount}
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

ShowsComponent.defaultProps = {
  showsList:     [],
  showsCount:    0,
};

ShowsComponent.propTypes = {
  showsList:    PropTypes.array,
  showsCount:   PropTypes.number,
};

const mapDispatchToProps = dispatch => ({
  getShowsAsync(page) {
    dispatch(getShowsAsync(page))
  },
});

const mapStateToProps = state => state.shows;

export default connect(mapStateToProps, mapDispatchToProps)(ShowsComponent);
