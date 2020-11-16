import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { dataItemTourRequest, fetchDataTourRequest } from "../../../redux/actions";
import { Spin, Alert, Popconfirm, notification } from "antd";
import formatPrice from "./../../../utilies/FormatNumber";
import Pagination from "./../Pagination/Pagination";
import { Link } from "react-router-dom";

const Packages = (props) => {
  const { dataTour } = props.dataTour;
  const { loading } = props.loading;
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    dispatch(fetchDataTourRequest());
    // dispatch(fetchDataTourRequest());
  }, []);

  //get current tour
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    dataTour && dataTour.data
      ? dataTour.data.slice(indexOfFirstPost, indexOfLastPost)
      : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log('dataTour', dataTour)

  const onGetDataTourItem = itemTour => {
    dispatch(dataItemTourRequest(itemTour))
  }

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
                // currentPosts.data &&
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
                        {/* onClick={onGetDataTourItem() */}

                        <div className="single-package-item-txt">
                          <h3>
                            <Link className="title" to={`/detail`}  onClick={ () => onGetDataTourItem(itemTour) } >
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
                            <button className="about-view packages-btn" href="#myModal" data-toggle="modal" >
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
});

export default connect(mapState)(Packages);
