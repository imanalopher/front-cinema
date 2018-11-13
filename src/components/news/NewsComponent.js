import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsProfileAsync } from '../../store/actions/newsActions';

class NewsComponent extends Component {
  constructor(props) {
    super(props);
    this.props.newsProfileAsync(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      this.props.newsProfileAsync(nextProps.match.params.slug);
    }
  }

  render() {
    const { news, latestNews } = this.props.newsProfile;
    return (
      <section className="container main-layout">
        <div className="container_body  row">
          <div className="col-9">
            <div className="main_news_container">
              <h1>{news.title}</h1>
              <span>By<a href="#">AMANDA RUSSEL</a>{new Date(news.createdAt).toLocaleString()}</span>
              <img src={`http://localhost:8000${news.image}`} alt=""/>

              <p>{news.description}</p>
              <div className="body_news">
                <div>
                  And far hey much hello and bashful one save less much goldfish analogically rabbit more hello threw
                  thanks therefore truthful unproductive strenuously
                  concentric repaid manifestly and oh between the one jeez and hit terrier dense unwittingly shark
                  versus inscrutably that much fit involuntary a endearingly.
                </div>
              </div>

              <h2>Sample Heading</h2>
              <p>
                And far hey much hello and bashful one save less much goldfish analogically rabbit more hello threw
                thanks therefore truthful unproductive strenuously
                concentric repaid manifestly and oh between the one jeez and hit terrier dense unwittingly shark
                versus inscrutably that much fit involuntary a endearingly.
              </p>
              <p>
                And far hey much hello and bashful one save less much goldfish analogically rabbit more hello threw
                thanks therefore truthful unproductive strenuously
                concentric repaid manifestly and oh between the one jeez and hit terrier dense unwittingly shark
                versus inscrutably that much fit involuntary a endearingly.
              </p>

            </div>
          </div>
          <div className="col-3">
            <div className="related_container_body">
              <span>The latest news</span>

              {latestNews.map(latestNews => {
                return <div className="table_news" key={latestNews.id}>
                  <div className="fresh_news">
                    <img src={`http://localhost:8000${latestNews.image}`} alt=""/>
                    <div className="news_title">
                      <p>
                        <Link to={`/news/${latestNews.slug}`}>{latestNews.title}</Link>
                      </p>
                      <span className="news_time">
                        <i className="far fa-clock"/>
                        {new Date(latestNews.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              })}

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newsProfileAsync(page) {
    dispatch(newsProfileAsync(page))
  },
});

const mapStateToProps = state => state.news;

export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent);
