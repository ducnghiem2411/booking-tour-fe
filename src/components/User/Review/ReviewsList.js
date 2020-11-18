import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchReviewsListRequest } from "../../../redux/actions";
import { Rate } from 'antd';

const ReviewsList = (props) => {
  const { reviewsList } = props.reviewsList;

  const dispatch = useDispatch();
  const { itemTour } = props;

  useEffect(() => {
    dispatch(fetchReviewsListRequest(itemTour.placeId));
  }, []);

  return (
    <>
      <div className="list-review">
        {reviewsList &&
          reviewsList.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                <div className="img">
                  <img src="https://via.placeholder.com/50x50" />
                </div>
                <div className="feedback">
                  <div className="name"> {item.username} </div>
                  <Rate disabled  allowHalf defaultValue={item ? item.star : 1} />
                  <p className="feedback-content">{item ? item.content : ""}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const mapState = (state) => ({
  reviewsList: state.review,
});

export default connect(mapState)(ReviewsList);
