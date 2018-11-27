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
                  <NavLink exact to="/movies" activeClassName="active">Фильмы</NavLink>
                </li>
                <li>
                  <NavLink to="/tv-shows" activeClassName="active">ТВ шоу</NavLink>
                </li>
                <li>
                  <NavLink to="/celebs" activeClassName="active">звезды</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName="active">Новости и события</NavLink>
                </li>
                <li className="pro-go"><a href="#">Pro</a></li>
              </ul>
            </div>
          </div>
        </div>

    );
  }
}

export default MainMenu;
