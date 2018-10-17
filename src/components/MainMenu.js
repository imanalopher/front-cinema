import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MainMenu extends Component {

  render() {
    return (
        <div className="main-menu">
          <div className="container">
            <div className="menu-container">
              <NavLink to="/" className="logo" />
              <ul className="nav-bar">
                <li>
                  <NavLink exact to="/" activeClassName="active">Фильмы</NavLink>
                </li>
                <li>
                  <NavLink to="/tv-shows" activeClassName="active">ТВ шоу</NavLink>
                </li>
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
