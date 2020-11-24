import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  dataItemTourRequest,
  fetchDataTourRequest,
  bookingTourRequest,
  openNotification,
  resetStatusBookingTour,
} from "../../../redux/actions";
import formatPrice from "./../../../utilies/FormatNumber";
import { Link, useHistory } from "react-router-dom";
import { Rate, List, Spin } from "antd";
import Pagination from "../Pagination/Paginate";
import queryString from "query-string";

const Packages = (props) => {
  const { dataTour } = props.dataTour;
  // console.log('dataTour', dataTour)
  const { messageBooking } = props.messageBooking;
  const dispatch = useDispatch();

  const { bookingTourStatus } = props.bookingTourStatus;
  const { keyBookingTourStatus } = props.keyBookingTourStatus;
  const { loading } = props.loading;

  const history = useHistory();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const total = dataTour && dataTour.data ? dataTour.data.totalTour : 0;

  const [filters, setFilters] = useState({
    limit: 6,
    page: 1,
  });

  const handlePageChange = (activePage) => {
    setFilters({
      ...filters,
      page: activePage,
    });
  };

  useEffect(() => {
    const paramsString = queryString.stringify(filters);
    dispatch(fetchDataTourRequest(paramsString));
  }, [filters]);

  // const onGetDataTourItem = (itemTour) => {
  //   dispatch(dataItemTourRequest(itemTour));
  // };

  const onBookingTour = (itemTour) => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    } else {
      dispatch(bookingTourRequest(itemTour._id, itemTour.name));
    }
  };

  useEffect(() => {
    if (keyBookingTourStatus !== 0) {
      if (bookingTourStatus) {
        openNotification(
          bookingTourStatus,
          "Success",
          "Booking tour successfully !"
        );
      } else {
        openNotification(bookingTourStatus, "Failed", messageBooking);
      }
    }
    dispatch(resetStatusBookingTour());
  }, [bookingTourStatus, keyBookingTourStatus]);

  return (
    <>
      <section id="pack" className="packages">
        <div className="container">
          <div className="gallary-header text-center">
            <h2>special packages</h2>
            <p>
              Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
          <div className="packages-content">
            <div className="row">
          
              {dataTour && dataTour.data && dataTour.data.tours
                ? dataTour.data.tours.map((itemTour, index) => {
                    return (
                      
                        <div key={index} className="col-md-4 col-sm-6">
                          <div className="single-package-item">
                            <div className="package-img">
                              <img
                                className="placeholder"
                                src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg"
                                // src="https://via.placeholder.com/360x292"
                              />
                            </div>

                            <div className="single-package-item-txt">
                              <h3>
                                <Link
                                  className="title"
                                  to={`/detail/${itemTour._id}`}
                                  // onClick={() => onGetDataTourItem(itemTour)}
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
          <Pagination
            total={total}
            limit={limit}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  dataTour: state.tour,
  loading: state.tour,
  loginStatus: state.login,
  bookingTourStatus: state.tour,
  keyBookingTourStatus: state.tour,
  messageBooking: state.tour,
});

export default connect(mapState)(Packages);
