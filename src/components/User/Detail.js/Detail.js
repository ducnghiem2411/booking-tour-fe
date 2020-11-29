import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SuccessBookModal from "../Modal/StatusBookingTourModal";
import { Form, Input, Button, Rate, Checkbox, Carousel } from "antd";
import Review from "../Review/Review";
import { dataItemTourRequest } from "./../../../redux/actions";
import { useParams, useRouteMatch } from "react-router-dom";
import ReviewsList from "../Review/ReviewsList";
import SimilarTours from "../SimilarTours/SimilarTours";

const Detail = (props) => {
  const { itemTour } = props.itemTour;
  const dispatch = useDispatch();
  const {statusShowDetailTour} = props.statusShowDetailTour



  const { match } = props;

  useEffect(() => {
    dispatch(dataItemTourRequest(match.params.id));
    window.scrollTo(0, 0);
  }, [statusShowDetailTour]);

  return (
    <>
      {/* <SuccessBookModal /> */}
      <Header />
      <Breadcrumb match={match} />

      <div className="detail ">
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="side-bar">
                  <div className="map"></div>
                  <div className="review"></div>
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
                      infinite
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
});

export default connect(mapState)(Detail);
