import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchDataTourRequest } from "../../../redux/actions";
import { Spin, Alert, Popconfirm ,notification} from "antd";
import formatPrice from './../../../utilies/FormatNumber'

const Packages = (props) => {
  const { dataTour } = props.dataTour;
  const { loading } = props.loading;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchDataTourRequest());
    // dispatch(fetchDataTourRequest());
  }, []);

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
              {dataTour &&
                dataTour.data &&
                dataTour.data.map((itemTour, index) => {
                  return (
                    <div className="col-md-4 col-sm-6" key={index}>
                      <div className="single-package-item">
                        <Spin spinning={loading} delay={500}>
                         {/* <div className="tour-img">
                           {itemTour ? itemTour.images : ( */}
                             <img className="placeholder" src="https://via.placeholder.com/360x292"/>
                           {/* ) } */}
                         {/* </div> */}
                        </Spin>
                        {/* <img
                          src="assets/images/packages/p6.jpg"
                          alt="package-place"
                        /> */}
                        <div className="single-package-item-txt">
                          <h3>
                            <span>
                               {itemTour ? itemTour.name : ""}
                            </span>
                           
                            <span className="pull-right">
                              {itemTour ? formatPrice(itemTour.price)  : ""} đ
                            </span>
                          </h3>
                          <div className="packages-para">
                            <p>
                              {itemTour && itemTour.description
                                ? itemTour.description
                                : ""}
                            </p>
                          </div>
                          <div className="packages-review">
                            <p>
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <span>2544 review</span>
                            </p>
                          </div>
                          <div className="about-btn">
                            <button className="about-view packages-btn">
                              book now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  dataTour: state.tour,
  loading: state.tour,
});

export default connect(mapState)(Packages);
