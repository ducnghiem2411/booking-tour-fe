import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { bookingTourRequest } from '../../../redux/actions'
import formatPrice from '../../../utilies/FormatNumber'



const Filter = props => {

    const dispatch = useDispatch()
    const history = useHistory();

    const {dataFilter} = props.dataFilter


    const onBookingTour = (itemTour) => {
        const token = localStorage.getItem("token");
    
        if (!token) {
          history.push("/login");
        } else {
          dispatch(bookingTourRequest(itemTour._id, itemTour.name));
        }
      };

    return (

        <>

        <div className="filtered-tours">
        <div className="packages">
            <div className="container">
                <div className="row">
                {dataFilter
                ? dataFilter.map((itemTour, index) => {
                    return (
                      
                        <div key={index} className="col-md-4 col-sm-6">
                          <div className="single-package-item">
                            <div className="package-img">
                              <img
                                className="placeholder"
                                src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg"
                              />
                            </div>

                            <div className="single-package-item-txt">
                              <h3>
                                <Link
                                  className="title"
                                  to={`/detail/${itemTour._id}`}
                                >
                                  <span>{itemTour ? itemTour.name : ""}</span>
                                </Link>
                              </h3>
                              <div className="packages-para">
                                <p>
                                  {itemTour && itemTour.description
                                    ? itemTour.description
                                    : ""}
                                </p>
                              </div>
                              <p className="location">
                                {" "}
                                <span>
                                  <i className="fa fa-map-marker"></i>
                                </span>{" "}
                                {itemTour && itemTour.place}
                              </p>
                              <div className="about-btn">
                                <button
                                  className="about-view packages-btn"
                                  onClick={() => onBookingTour(itemTour)}
                                >
                                  book now
                                </button>
                                <span className="pull-right">
                                  {itemTour ? formatPrice(itemTour.price) : ""}{" "}
                                  đ
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                     
                    );
                  })
                : []
                }
                </div>
            </div>
            
            

        </div>
        </div>

        




        </>
    )
}

const mapState = state => ({
    dataFilter: state.tour
})


export default connect(mapState) (Filter)

