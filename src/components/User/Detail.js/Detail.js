import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SuccessBookModal from "../Modal/SuccessBookModal";
import { Form, Input, Button, Rate , Checkbox } from "antd";
import Review from "../Review/Review";

const Detail = (props) => {
  const { itemTour } = props.itemTour;

  

  return (
    <>
      <SuccessBookModal />
      <Header />
      <Breadcrumb />

      <div className="detail">
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
                    <button
                      href="#myModal"
                      data-toggle="modal"
                      className="booking"
                    >
                      {" "}
                      Book now
                    </button>
                  </div>
                  <p className="location">
                    {" "}
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>{" "}
                    {itemTour && itemTour.place}
                  </p>
                  <p className="desc">{itemTour && itemTour.description}</p>

                  <div className="review">
                    <h3> Tour reviews </h3>
                    <img
                      style={{
                        display: "block",
                        width: "100%",
                        height: "150px",
                      }}
                      src="https://via.placeholder.com/150x150"
                    />
                    <h4>Reviews</h4>
                    <Review itemTour ={itemTour} />

                    <div className="list-review">
                      <div className="list-item">
                        <div className="img">
                          <img src="https://via.placeholder.com/50x50" />
                        </div>
                        <div className="feedback">
                          <div className="name">Tom holand</div>
                          <div className="star">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                          </div>
                          <p className="feedback-content">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
});

export default connect(mapState)(Detail);
