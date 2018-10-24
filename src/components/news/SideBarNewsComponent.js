import React, { Component } from 'react';
import { newsListBySlugAsync, clearNewsListBySlug } from '../../store/actions/newsActions';
import { connect } from 'react-redux';

class SideBarNewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      haveRequested: false,
    };
  }

  state = {
    haveRequested: false,
  };

  componentWillMount() {
    const {slug} = this.props.match.params;
    this.props.getNewsBySlug(slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== undefined && this.props.match.params.slug !== undefined && nextProps.match.params.slug !== this.props.match.params.slug) {
      const {slug} = nextProps.match.params;
      this.props.getNewsBySlug(slug);
    }

    if (nextProps.match.params.slug === undefined && nextProps.match.path === "/" && this.state.haveRequested === false) {
      this.props.getNewsBySlug('top-news');
      this.setState({ haveRequested: true });
    }
  }

  render() {
    const { news } = this.props;
    return (
      <React.Fragment>
        {news.map(newsItem => {
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
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getNewsBySlug(slug) {
    dispatch(newsListBySlugAsync(slug))
  },
  clearNewsBySlug() {
    dispatch(clearNewsListBySlug())
  }
});

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDispatchToProps)(SideBarNewsComponent);
