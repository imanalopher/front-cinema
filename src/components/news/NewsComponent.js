import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tab from './Tab';
import { newsListBySlugAsync } from '../../store/actions/newsActions';
import MovieComponent from '../movie/MovieComponent';

class NewsComponent extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
    this.props.getNewsBySlug(this.state.activeTabIndex);
  }

  state = { activeTabIndex: 'top-news' };

  changeTab(index) {
    this.props.getNewsBySlug(index);
    this.setState({ activeTabIndex: index });
  }

  render() {
    const { newsTypes, carpets } = this.props;
    const { newsBySlug } = this.props.news;
    const { activeTabIndex } = this.state;
    console.log('carpets:', carpets);

    return (
      <React.Fragment>
        <div className="main-right-news-container">
          <div className="main-right-news-head">
            <ul>
              <Tab active={activeTabIndex === 'top-news'} onClick={this.changeTab.bind(this, 'top-news')}>Top news</Tab>
              {newsTypes.map(newsTypeItem => {
                return (
                  <Tab key={newsTypeItem.id} active={activeTabIndex === newsTypeItem.slug} onClick={this.changeTab.bind(this, newsTypeItem.slug)}>{newsTypeItem.title}</Tab>
                );
              })}
            </ul>
          </div>
          <div className={"main-right-news-list"}>
            <div id="accordion">
              {newsBySlug.map(newsItem => {
                return <div className="card" key={newsItem.id}>
                  <div className="card-header" id={`heading${newsItem.id}`}>
                    <a className="news-head collapsed" data-toggle="collapse" data-target={`#collapse${newsItem.id}`} aria-controls={`collapse${newsItem.id}`}>
                      <label>{newsItem.title}</label>
                      <span><i className="far fa-clock"/>1 hour ago</span>
                    </a>
                    <img src={`http://localhost:8000/${newsItem.image}`} />
                  </div>
                  <div id={`collapse${newsItem.id}`} className="collapse" aria-labelledby={`heading${newsItem.id}`} data-parent="#accordion">
                    <div className="card-body">
                      {newsItem.description}
                      <div className="main-news-bottom">
                        <div className="news-read-more">
                          <a href="#">See More..</a>
                        </div>
                        <div className="news-main-details">
                          <ul>
                            <li><a href="#"><i className="far fa-heart"/></a>{newsItem.likeCount}</li>
                            <li><a href="#"><i className="far fa-comment-alt"/>503</a></li>
                            <li><a title="Share this post" href="#"><i className="fas fa-share-square"/></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="main-right-news-container">
          <div className="main-right-news-head">
            <ul>
              <li><a href="#">Latest</a></li>
              <li><a href="#" className="active">Red Carpet</a></li>
              <li><a href="#">Special</a></li>
            </ul>
          </div>
          <div className="main-pics-list">
            {carpets.map(carpet => <a href="#">
              <img src={`http://localhost:8000/${carpet.image}`} title={carpet.name} />
            </a>)}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

MovieComponent.defaultProps = {
  newsItem: {
    title:           PropTypes.string.isRequired,
    likeCount:       PropTypes.number.isRequired,
    image:           PropTypes.string.isRequired,
    description:     PropTypes.string.isRequired,
    genre:           PropTypes.string.isRequired,
  },
  item: {
    slug:            PropTypes.string.isRequired,
    title:           PropTypes.string.isRequired,
  }
};

NewsComponent.propTypes = {
  newsTypes: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getNewsBySlug(slug) {
    dispatch(newsListBySlugAsync(slug))
  }
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent);
