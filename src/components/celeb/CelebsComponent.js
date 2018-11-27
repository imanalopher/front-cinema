import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCelebsListAsync } from '../../store/actions/celebsActions';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class CelebsComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      activePage: 1
    };
  }

  componentWillMount() {
    this.props.getCelebsListAsync(1);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.props.getCelebsListAsync(pageNumber);
  }

  render() {

    const { celebsList } = this.props;
    const celebsCount = celebsList.count;

    return (
      <section className="main-layout">
        <div className="container main-container">
          <div className="m-list-header">
            <label className="main_title top_news">Males/Females(Sorted by Popularity Ascending)</label>
            <div className="mlist-sort">
              <select>
                <option>LAST WEEK</option>
                <option>2</option>
                <option>2</option>
              </select>
            </div>
          </div>

          {celebsList.people.map(celeb => {
            return <div className="list_of_celeb" key={celeb.id}>
              <div className="celeb_container row">
                <div className="col-2">
                  <img src={`http://localhost:8000${celeb.image}`} alt=""/>
                </div>
                <div className="col-6 celeb_inform">
                  <div>
                    <h1>
                      <Link to={`/celebs/${celeb.id}`}>{celeb.name + ' ' + celeb.surname}</Link>
                    </h1>
                  </div>
                  <div className="user_profession">
                    {celeb.occupations.map(occupation => {
                      return <React.Fragment key={occupation.name}>
                        <a href="#">{occupation.name}</a><span>|</span>
                      </React.Fragment>
                    })}
                  </div>
                  <div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur voluptatem, ... </p>
                  </div>
                </div>
                <div className="col-3 celeb_movie_main">
                  <div className="celeb_rate">
                    <img src="images/system-images/chart-line_celeb_up.png" alt=""/>
                    1000
                  </div>
                  <div className="celeb_birth">{new Date(celeb.birthday).toLocaleString('en-US')}</div>
                  <div className="celeb_movie">
                    <a href="#">105 movies</a>
                  </div>
                  <div className="celeb_foto">
                    <a href="#">241 photos</a>
                    <a href="#">25 videos</a>
                  </div>
                  <div className="celeb_icons">
                    <a href=""><i className="fab fa-facebook-f"/></a>
                    <a href=""><i className="fab fa-twitter"/></a>
                    <a href=""><i className="fab fa-instagram"/></a>
                  </div>
                </div>
              </div>
            </div>
          })}

          <div className="col-lg-6 offset-lg-3 d-flex">
            <Pagination
              activePage={this.state.activePage}
              activeClass={'active_page'}
              itemClass={'page-item'}
              innerClass={'pagination mx-auto justify-content-center'}
              itemsCountPerPage={2}
              totalItemsCount={celebsCount}
              pageRangeDisplayed={5}
              linkClass={'page-link'}
              lastPageText={<i className="fas fa-arrow-right"/>}
              firstPageText={<i className="fas fa-arrow-left"/>}
              onChange={this.handlePageChange}
              hideDisabled={true}
              hideFirstLastPages={false}
              hideNavigation={true}
            />
          </div>

        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCelebsListAsync(page) {
    dispatch(getCelebsListAsync(page))
  }
});

const mapStateToProps = state => state.celebs;

export default connect(mapStateToProps, mapDispatchToProps)(CelebsComponent);