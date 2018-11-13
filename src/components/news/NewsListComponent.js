import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import { connect } from 'react-redux';
import { newsListAsync } from '../../store/actions/newsActions';
import { Link } from "react-router-dom";

class NewsListComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      activePage: 1
    };
  }

  componentWillMount() {
    this.props.newsListAsync(1);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.newsListAsync(pageNumber);
  }

  render() {
    const { newsList } = this.props;
    const newsCount = newsList.count;

    return (
        <section className="main-layout">
            <div className="container main-container">
                <div className="m-list-header">
                    <label className="main_title top_news">Top News</label>
                    <div className="mlist-sort">
                        <select>
                            <option>LAST WEEK</option>
                            <option>2</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>
                <div className="row news_container">
                  {newsList.news.map(news => {
                    return <div className="col-6" key={news.id}>
                      <div className="list_of_news">
                        <div className="row no-gutters">
                          <img src={`http://localhost:8000${news.image}`} alt=""/>
                        </div>
                        <div className="news_column">
                          <p>
                            <Link to={`/news/${news.slug}`}>{news.title}</Link>
                          </p>
                          <p>
                            <i className="far fa-clock"/> <b>{new Date(news.createdAt).toLocaleString()}</b> / By <span>Alexander Roman</span>
                          </p>
                          <p>{news.miniDescription}</p>
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
                    itemsCountPerPage={2}
                    totalItemsCount={newsCount}
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

NewsListComponent.defaultProps = {
  newsList: {
    news:           PropTypes.array.isRequired,
    count:          PropTypes.number.isRequired,
  },
};

const mapDispatchToProps = dispatch => ({
  newsListAsync(page) {
    dispatch(newsListAsync(page))
  }
});

const mapStateToProps = state => state.news;

export default connect(mapStateToProps, mapDispatchToProps)(NewsListComponent);
