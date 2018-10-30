import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/home/HomeComponent';
import TVShowsComponent from './components/movie/TVShowsComponent';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <HeaderComponent />
        <Switch>
          <Route exact={true} path={"/"} component={HomeComponent} />
          <Route path={"/tv-shows"} component={TVShowsComponent} />
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
