import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { bookingTourRequest } from '../../../redux/actions'
import formatPrice from '../../../utilies/FormatNumber'



const Filter = props => {

    const dispatch = useDispatch()
    const history = useHistory();
    const {statusFilteredTours} = props.statusFilteredTours
    const [visible, setVisible] = useState(true);



    const {dataFilter} = props.dataFilter
    const {keyFilter} = props.keyFilter


    const onBookingTour = (itemTour) => {
        const token = localStorage.getItem("token");
    
        if (!token) {
          history.push("/login");
        } else {
          dispatch(bookingTourRequest(itemTour._id, itemTour.name));
        }
      };
      useEffect(() => {
        setTimeout(() => {
          setVisible(false);
        }, 1000000);
      }, [statusFilteredTours, keyFilter]);

    return (

        <>

        <div className= {statusFilteredTours && visible ? "filtered-tours active" : "filtered-tours"} >
        <div className="packages">
            <div className="container">
                <div className="row">
                {dataFilter && dataFilter.length > 0
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
                : (
                  <div className="search-failed" >
                    <img src='data:image/png;base64,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'/>
                    <p>Sorry, We cannot find any tours with your search text or filter options!</p>
                  </div>
                )
                }
                </div>
            </div>
            
            

        </div>
        </div>

        




        </>
    )
}

const mapState = state => ({
    dataFilter: state.tour,
    statusFilteredTours: state.tour,
    keyFilter: state.tour
})


export default connect(mapState) (Filter)

