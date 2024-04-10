import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SuccessBookModal from "../Modal/StatusBookingTourModal";
import { Form, Input, Button, Rate, Checkbox, Carousel } from "antd";
import Review from "../Review/Review";
import {
  bookingTourRequest,
  dataItemTourRequest,
  openNotification,
  resetStatusBookingTour,
} from "./../../../redux/actions";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ReviewsList from "../Review/ReviewsList";
import SimilarTours from "../SimilarTours/SimilarTours";
import SupportModal from "../Modal/SupportModal";

const Detail = (props) => {
  const { itemTour } = props.itemTour;
  const dispatch = useDispatch();
  const { statusShowDetailTour } = props.statusShowDetailTour;
  const { bookingTourStatus } = props.bookingTourStatus;
  const { keyBookingTourStatus } = props.keyBookingTourStatus;
  const { messageBooking } = props.messageBooking;
  const [statusShowSupportModal, setStatusShowSupportModal] = useState(false)
  const history = useHistory();

  const { match } = props;

  useEffect(() => {
    dispatch(dataItemTourRequest(match.params.id));
    window.scrollTo(0, 0);
  }, [statusShowDetailTour]);

  const onBookingTour = (itemTour) => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    } else {
      dispatch(bookingTourRequest(itemTour._id, itemTour.name));
    }
  };

  const showSupportModal = e => {
    e.preventDefault()
    setStatusShowSupportModal(true)
  }

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
      {/* <SuccessBookModal /> */}
      <Header />
      <Breadcrumb match={match} />
      <SupportModal status = {statusShowSupportModal}/>

      <div className="detail ">
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="side-bar">
                  <div className="date">
                    <p>Ngày khởi hành: 03/11/2020</p>
                    <p>Số chỗ còn nhận: {itemTour && itemTour.member} </p>
                    <p>Nơi khởi hành: {itemTour && itemTour.place} </p>
                  </div>
                  <div className="price">
                    <p>
                      {`  ${itemTour && itemTour.price}`.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}{" "}
                      đ
                    </p>
                    <button
                      className="about-view packages-btn"
                      onClick={() => onBookingTour(itemTour)}
                    >
                      book now
                    </button>
                  </div>
                  <div className="call">
                    <p>Bạn cần hỗ trợ ?</p>

                    <div className="support">
                      <div className="phone">
                        <a href="tel:+900300400">
                        <img
                          src="https://travel.com.vn/Content/ThemeHe/img/btn-call1.png"
                          alt="phone"
                        /></a>
                      </div>
                      <a className="letter" href="" onClick={showSupportModal}>
                        <img
                          src="https://travel.com.vn/Content/ThemeHe/img/btn-call2.png"
                          alt="letter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="info">
                  <div className="title">
                    <h4 className="name"> {itemTour && itemTour.name} </h4>
                    {/* <button
                      href="#myModal"
                      data-toggle="modal"
                      className="booking"
                    >
                      {" "}
                      Book now
                    </button> */}
                  </div>
                  <p className="location">
                    {" "}
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>{" "}
                    {itemTour && itemTour.place}
                  </p>

                  <div className="album">
                    <Carousel
                      slidesToShow={1}
                      draggable
                      dots={true}
                      autoplay
                      infinite={false}
                    >
                      {itemTour && itemTour.images
                        ? itemTour.images.map((item, index) => {
                            return (
                              <div className="package-img" key={index}>
                                <img
                                  className="placeholder"
                                  src={
                                    item
                                      ? item
                                      : "https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg"
                                  }
                                />
                              </div>
                            );
                          })
                        : []}
                    </Carousel>
                  </div>

                  <p className="desc">{itemTour && itemTour.description}</p>

                  <div className="review">
                    {/* <h3> Tour reviews </h3> */}
                    {/* <img
                      style={{
                        display: "block",
                        width: "100%",
                        height: "150px",
                      }}
                      src="https://via.placeholder.com/150x150"
                    /> */}
                    <h4 style={{ margin: "20px 0" }}>Reviews</h4>
                    <Review itemTour={itemTour ? itemTour : []} />

                    <ReviewsList itemTour={itemTour} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="similar-tours">
                <SimilarTours />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapState = (state) => ({
  itemTour: state.tour,
  statusShowDetailTour: state.tour,
  bookingTourStatus: state.tour,
  keyBookingTourStatus: state.tour,
  messageBooking: state.tour,
});

export default connect(mapState)(Detail);
