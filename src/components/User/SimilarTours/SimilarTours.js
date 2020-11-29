import React, { useEffect } from "react";
import { Carousel } from "antd";
import { connect, useDispatch } from "react-redux";
import {
  bookingTourRequest,
  changeStatusToShowDetailTour,
  fetchAllToursRequest,
} from "../../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import formatPrice from "../../../utilies/FormatNumber";

const SimilarTours = (props) => {
  const { dataAllTours } = props.dataAllTours;
  const history = useHistory();

  const onBookingTour = (itemTour) => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    } else {
      dispatch(bookingTourRequest(itemTour._id, itemTour.name));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllToursRequest());
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center", margin: "10px 0 30px 0" }}>
        {" "}
        Similar Tours{" "}
      </h3>
      <Carousel slidesToShow={4} draggable dots={false} infinite={false}>
        {dataAllTours
          ? dataAllTours.map((itemTour, index) => {
              if (index < 5) {
                return (
                  <div key={index} className="col-md-3 col-sm-6">
                    <div className="single-package-item similar">
                      <div className="package-img similar">
                        <img
                          className="placeholder"
                          src={
                            itemTour && itemTour.images[0]
                              ? itemTour.images[0]
                              : "https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg"
                          }
                        />
                      </div>

                      <div className="single-package-item-txt similar">
                        <h3>
                          <Link
                            className="title"
                            to={`/detail/${itemTour._id}`}
                            onClick = { () => dispatch(changeStatusToShowDetailTour())}
                          >
                            <span>{itemTour ? itemTour.name : ""}</span>
                          </Link>
                        </h3>
                        <div className="packages-para similar">
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
                            className="about-view packages-btn similar"
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
              }
            })
          : []}
      </Carousel>
    </>
  );
};

const mapState = (state) => ({
  dataAllTours: state.tour,
});

export default connect(mapState)(SimilarTours);
