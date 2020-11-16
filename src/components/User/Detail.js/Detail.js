import React from "react";
import { connect } from "react-redux";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Header from "../Header/Header";
import SuccessBookModal from "../Modal/SuccessBookModal";

const Detail = (props) => {

    const {itemTour} = props.itemTour


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
                    <button href="#myModal" data-toggle="modal" className="booking"> Book now</button>
                  </div>
                  <p className="location">
                    {" "}
                    <span>
                      <i className="fa fa-map-marker"></i>
                    </span>{" "}
                    {itemTour && itemTour.place}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = state => ({
    itemTour: state.tour
})

export default connect(mapState) (Detail);
