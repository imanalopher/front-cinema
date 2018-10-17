import React, { Component } from 'react';

class HeaderComponent extends Component {

  render() {
    return (
      <React.Fragment>
        <header className="main-header">
          <nav>
            <div className="header-top">
              <div className="container">
                <div className="row no-gutters top-menu">
                  <div className="col-2">
                    <ul>
                      <li><a href="#"><i className="fas fa-mobile-alt"/></a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div>
                  <div className="col-8">
                    <div className="main-search">
                      <input type="text" placeholder="Поиск фильмов, тв-шоу, знаменитостей и другого" />
                      <button type="button" className="btn-search">
                        <i className="fa fa-search" aria-hidden="true"/>
                      </button>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="dropdown main-user-container">
                      <div className="guest-container">
                        <a href="#">Login</a>
                        <span className="seperator">|</span>
                        <a href="#">Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;
