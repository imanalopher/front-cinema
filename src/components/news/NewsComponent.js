import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieComponent from '../movie/MovieComponent';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import SideBarNewsComponent from './SideBarNewsComponent';

class NewsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { newsTypes } = this.props;
    return (
      <BrowserRouter>
        <div className="main-right-news-container">
          <div className="main-right-news-head">
            <ul>
              <li>
                <NavLink exact={true} to={`/`} activeClassName={"active"}>Top-News</NavLink>
              </li>
              {newsTypes.map(newsTypeItem => {
                return (
                  <li key={newsTypeItem.id}>
                    <NavLink to={`/news/${newsTypeItem.slug}`} activeClassName={"active"}>{newsTypeItem.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <Switch>
            <div className={"main-right-news-list"}>
              <div id="accordion">
                <Route exact={true} path='/' component={SideBarNewsComponent} />
                <Route path='/news/:slug' component={SideBarNewsComponent} />
                <Route path={"/coming-soon"} component={SideBarNewsComponent} />
              </div>
            </div>
          </Switch>
        </div>
      </BrowserRouter>
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

export default NewsComponent;
