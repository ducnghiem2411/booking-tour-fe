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
import Pagination from "./../Pagination/Pagination";
import { Link, useHistory } from "react-router-dom";

const Packages = (props) => {
  const { dataTour } = props.dataTour;
  const { messageBooking } = props.messageBooking;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const { bookingTourStatus } = props.bookingTourStatus;
  const { keyBookingTourStatus } = props.keyBookingTourStatus;

  const history = useHistory();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    dataTour && dataTour.data
      ? dataTour.data.slice(indexOfFirstPost, indexOfLastPost)
      : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onGetDataTourItem = (itemTour) => {
    dispatch(dataItemTourRequest(itemTour));
  };

  const onBookingTour = (itemTour) => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    } else {
      dispatch(bookingTourRequest(itemTour._id, itemTour.name));
    }
  };

  useEffect(() => {
    dispatch(fetchDataTourRequest());

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
              {currentPosts &&
                currentPosts.map((itemTour, index) => {
                  return (
                    <div key={index} className="col-md-4 col-sm-6">
                      <div className="single-package-item">
                        <div className="package-img">
                          <img
                            className="placeholder"
                            src="https://via.placeholder.com/360x292"
                          />
                        </div>

                        <div className="single-package-item-txt">
                          <h3>
                            <Link
                              className="title"
                              to={`/detail/${itemTour._id}`}
                              onClick={() => onGetDataTourItem(itemTour)}
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
                              {itemTour ? formatPrice(itemTour.price) : ""} đ
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataTour.length}
          paginate={paginate}
        />
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
