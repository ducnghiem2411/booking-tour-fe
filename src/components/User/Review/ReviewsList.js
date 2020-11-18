import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReviewsListRequest } from "../../../redux/actions";

const ReviewsList = (props) => {


    const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchReviewsListRequest())
  }, []);

  return (
    <>
      <div className="list-review">
        <div className="list-item">
          <div className="img">
            <img src="https://via.placeholder.com/50x50" />
          </div>
          <div className="feedback">
            <div className="name">Tom holand</div>
            <div className="star">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <p className="feedback-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsList;
