import React, { Component } from 'react';

class FooterComponent extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-10">
              <div className="footer-content">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Search</a></li>
                  <li><a href="#">In Theaters</a></li>
                  <li><a href="#">Coming Soon</a></li>
                  <li><a href="#">Top Movies</a></li>
                  <li><a href="#">TV</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Press Room</a></li>
                </ul>
                <ul>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Register</a></li>
                  <li><a href="#">Advertising</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">PRO</a></li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="footer-social">
                <ul>
                  <li><a href="#"><i className="fab fa-twitter"/></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"/></a></li>
                  <li><a href="#"><i className="fab fa-instagram"/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
