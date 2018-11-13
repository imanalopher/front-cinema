import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FilmsComponent from "./components/movie/FilmsComponent";
import FilmComponent from './components/movie/FilmComponent';
import ShowsComponent from './components/movie/ShowsComponent';
import ShowComponent from './components/movie/ShowComponent';
import NewsComponent from './components/news/NewsComponent';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <HeaderComponent />
        <Switch>
          <Route exact={true} path={"/"} component={HomeComponent} />
          <Route exact path={"/movies"} component={FilmsComponent} />
          <Route path={"/movie/:id"} component={FilmComponent} />
          <Route path={"/tv-shows"} component={ShowsComponent} />
          <Route path={"/shows/:id(\\d+)"} component={ShowComponent} />
          <Route path={"/news"} component={NewsComponent} />
          <Route component={HomeComponent}/>
        </Switch>
        <FooterComponent />
      </React.Fragment>
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
