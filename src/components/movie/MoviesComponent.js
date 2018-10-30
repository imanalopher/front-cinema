import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import ComingSoonComponent from "./ComingSoonComponent";

class MoviesComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hypeNews } = this.props;

    let hype = '';
    if (typeof(hypeNews) === 'object') {
      hype = <React.Fragment>
        <span className="spacer"/>
        <div className="col-12">
          <div className="editors-spot">
            <label>Casting for "Hype of Manas"</label>
            <div className="row">
              <div className="col-6">
                <img src={`http://127.0.0.1/${hypeNews.image}`} />
              </div>
              <div className="col-6">
                <div className="editors-news">
                  <h1>{hypeNews.title}</h1>
                  <span className="posted-by">Posted by: Aichurek Aichurekovna</span>
                  <p>{hypeNews.description}</p>
                  <div className="editors-bottom">
                    <a href="#">Continue Reading..</a>
                    <span className="editors-time"><i className="far fa-clock"/>1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    }

    return (
      <BrowserRouter>
        <div className="main-container">
          <div className="current-movies">
            <div className="current-movies-head">
              <ul className="current-movies-nav">
                <li><NavLink to="/" exact={true} activeClassName={"active"}>This Month</NavLink></li>
                <li><NavLink to="/coming-soon" activeClassName={"active"}>Coming Soon</NavLink></li>
              </ul>
              <ul className="current-movies-filter">
                <li>
                  <a className="active" href="#">
                    <i className="fa fa-th-large" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-bars" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

            <Switch>
              <div className="row current-movies-content">
                <Route exact={true} path='/' component={ComingSoonComponent} />
                <Route path='/coming-soon' component={ComingSoonComponent} />
                {hype}
              </div>
            </Switch>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default MoviesComponent;
