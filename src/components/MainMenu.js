import React, { Component } from 'react';

class MainMenu extends Component {

  render() {
    return (
      <div className="main-menu">
        <div className="container">
          <div className="menu-container">
            <a href="#" className="logo"/>
            <ul className="nav-bar">
              <li><a className="active" href="#">фильмы</a></li>
              <li><a href="#">ТВ шоу</a></li>
              <li><a href="#">звезды</a></li>
              <li><a href="#">Новости и события</a></li>
              <li className="pro-go"><a href="#">Pro</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
